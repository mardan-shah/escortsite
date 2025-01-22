import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle, Edit2, Share2, Trash, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Stories from "react-insta-stories";

interface Story {
  url: string;
  type: 'image' | 'video';
}

interface StoryGroup {
  name: string;
  stories: Story[];
}

interface StoryData {
  url: string;
  type: 'image' | 'video';
  duration: number;
}

const StoryUploader: React.FC = () => {
  const [storyGroups, setStoryGroups] = useState<StoryGroup[]>([]);
  const [currentGroupIndex, setCurrentGroupIndex] = useState<number | null>(null);
  const [isStoryDialogOpen, setIsStoryDialogOpen] = useState<boolean>(false);
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState<boolean>(false);
  const [activeStoryIndex, setActiveStoryIndex] = useState<number>(0);
  const [uploadPreviews, setUploadPreviews] = useState<Story[]>([]);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState<boolean>(false);
  const [editingGroupName, setEditingGroupName] = useState<string>("");
  const [newGroupName, setNewGroupName] = useState<string>("");
  const [editingStories, setEditingStories] = useState<Story[]>([]);

  const getBorderStyle = (storiesCount: number): string => {
    if (storiesCount === 1) return "border-solid";
    const dashArray = `${12} ${12}`; // Base dash pattern
    const repeats = storiesCount;
    return `border-dashed border-[${dashArray.repeat(repeats)}]`;
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const files = event.target.files;
    if (files) {
      const previews: Story[] = Array.from(files).map((file) => ({
        url: URL.createObjectURL(file),
        type: file.type.startsWith("video") ? "video" : "image",
      }));
      setUploadPreviews(previews);
    }
  };
  
  const createStoryGroup = (): void => {
    if (uploadPreviews.length > 0) {
      setStoryGroups((prevGroups) => [
        ...prevGroups,
        { 
          name: newGroupName || `Circle ${prevGroups.length + 1}`, 
          stories: uploadPreviews 
        },
      ]);
      setUploadPreviews([]);
      setNewGroupName("");
      setIsUploadDialogOpen(false);
    }
  };

  const deleteStoryGroup = (): void => {
    setIsStoryDialogOpen(false);
    
    setTimeout(() => {
      setStoryGroups((prevGroups) => {
        if (currentGroupIndex === null) return prevGroups;
        const newGroups = prevGroups.filter((_, i) => i !== currentGroupIndex);
        if (newGroups.length > 0) {
          const newIndex = currentGroupIndex >= newGroups.length ? newGroups.length - 1 : currentGroupIndex;
          setCurrentGroupIndex(newIndex);
        } else {
          setCurrentGroupIndex(null);
        }
        return newGroups;
      });
    }, 100);
  };

  const editStoryGroup = (): void => {
    if (currentGroupIndex === null) return;
    setEditingGroupName(storyGroups[currentGroupIndex].name);
    setEditingStories([...storyGroups[currentGroupIndex].stories]);
    setIsEditDialogOpen(true);
  };

  const deleteStory = (index: number): void => {
    setEditingStories(prev => prev.filter((_, i) => i !== index));
  };

  const setCoverStory = (index: number): void => {
    setEditingStories(prev => {
      const newStories = [...prev];
      const [movedStory] = newStories.splice(index, 1);
      newStories.unshift(movedStory);
      return newStories;
    });
  };

  const saveEdit = (): void => {
    if (currentGroupIndex === null) return;
    setStoryGroups((prevGroups) =>
      prevGroups.map((group, index) =>
        index === currentGroupIndex
          ? { ...group, name: editingGroupName, stories: editingStories }
          : group
      )
    );
    setIsEditDialogOpen(false);
  };

  const shareStoryGroup = async (): Promise<void> => {
    if (currentGroupIndex === null) return;
    const currentGroup = storyGroups[currentGroupIndex];
    const shareData = {
      title: currentGroup.name,
      text: `Check out my story: ${currentGroup.name}`,
      url: window.location.href,
    };
    
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}&url=${encodeURIComponent(shareData.url)}`;
      window.open(shareUrl, '_blank');
    }
  };

  const navigateStoryGroups = (direction: number): void => {
    if (storyGroups.length > 0 && currentGroupIndex !== null) {
      const newIndex = (currentGroupIndex + direction + storyGroups.length) % storyGroups.length;
      setCurrentGroupIndex(newIndex);
      setActiveStoryIndex(0);
    }
  };

  const moveStoryToFirst = (previewIndex: number): void => {
    setUploadPreviews((prevPreviews) => {
      const newPreviews = [...prevPreviews];
      const [movedPreview] = newPreviews.splice(previewIndex, 1);
      newPreviews.unshift(movedPreview);
      return newPreviews;
    });
  };

  const renderStories = (): React.ReactNode => {
    if (currentGroupIndex === null || !storyGroups[currentGroupIndex]) {
      return null;
    }

    const stories: StoryData[] = storyGroups[currentGroupIndex].stories.map((story) => ({
      url: story.url,
      type: story.type,
      duration: 5000,
    }));

    return (
      <Stories
        stories={stories}
        currentIndex={activeStoryIndex}
        onNext={() => setActiveStoryIndex((prev) => (prev + 1) % stories.length)}
        onPrevious={() => setActiveStoryIndex((prev) => (prev - 1 + stories.length) % stories.length)}
        width="100%"
        height="100%"
      />
    );
  };

  return (
    <div className="bg-gray-50">
      <div className="w-full h-[20vh] flex items-center justify-start overflow-x-auto space-x-4 px-4">
        {storyGroups.map((group, index) => (
          <div key={index} className="relative h-20 w-20 flex-shrink-0">
            <div
              className={`relative h-full w-full border-4 ${
                group.stories.length > 0 ? "border-primarypink" : "border-gray-300"
              } rounded-full flex items-center justify-center cursor-pointer`}
              style={{ borderStyle: getBorderStyle(group.stories.length) }}
              onClick={() => {
                setCurrentGroupIndex(index);
                setActiveStoryIndex(0);
                setIsStoryDialogOpen(true);
              }}
            >
              {group.stories.length > 0 && (
                <Image
                  src={group.stories[0].url}
                  alt={`Preview for ${group.name}`}
                  fill
                  className="object-cover rounded-full"
                />
              )}
              <div className="absolute -bottom-8 text-center text-md w-20 font-semibold">
                {group.name}
              </div>
            </div>
          </div>
        ))}

        <div className="relative h-20 w-20 flex-shrink-0">
          <PlusCircle
            className="w-full h-full text-primarypink cursor-pointer"
            onClick={() => setIsUploadDialogOpen(true)}
          />
        </div>
      </div>

      <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload Stories</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <Input
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
              placeholder="Enter story circle name"
            />
            <input
              type="file"
              accept="image/*,video/*"
              multiple
              onChange={handleFileUpload}
              className="border p-2 w-full"
            />
            <div className="grid grid-cols-3 gap-2 max-h-60 overflow-y-auto">
              {uploadPreviews.map((preview, index) => (
                <div key={index} className="relative h-32 cursor-pointer" onClick={() => moveStoryToFirst(index)}>
                  {preview.type === 'image' ? (
                    <Image
                      src={preview.url}
                      alt={`Preview ${index}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  ) : (
                    <video
                      src={preview.url}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  )}
                  <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white px-2 rounded-tl-lg">
                    {index === 0 ? 'Cover' : index + 1}
                  </div>
                </div>
              ))}
            </div>
            <Button
              className="bg-primarypink text-white w-full hover:bg-primarypink/90"
              onClick={createStoryGroup}
              disabled={uploadPreviews.length === 0}
            >
              Create Story Circle
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isStoryDialogOpen} onOpenChange={setIsStoryDialogOpen}>
        <DialogContent className="min-h-[50vh]">
          <DialogHeader>
            <DialogTitle>
              {currentGroupIndex !== null && 
              storyGroups[currentGroupIndex] ? 
              storyGroups[currentGroupIndex].name : 
              'Stories'}
            </DialogTitle>
          </DialogHeader>
          {currentGroupIndex !== null && 
            storyGroups[currentGroupIndex] && 
            storyGroups.length > 0 && (
            <>
              <div className="flex justify-between items-center py-2">
                <div className="flex gap-2">
                  <Edit2
                    className="w-5 h-5 text-blue-600 cursor-pointer"
                    onClick={editStoryGroup}
                  />
                  <Trash
                    className="w-5 h-5 text-red-600 cursor-pointer"
                    onClick={deleteStoryGroup}
                  />
                  <Share2
                    className="w-5 h-5 text-green-600 cursor-pointer"
                    onClick={shareStoryGroup}
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => navigateStoryGroups(-1)}
                    disabled={storyGroups.length <= 1}
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => navigateStoryGroups(1)}
                    disabled={storyGroups.length <= 1}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative min-h-[40vh]">
                {renderStories()}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Story Circle</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <Input
              value={editingGroupName}
              onChange={(e) => setEditingGroupName(e.target.value)}
              placeholder="Enter story circle name"
            />
            <div className="grid grid-cols-3 gap-2 max-h-60 overflow-y-auto">
              {editingStories.map((story, index) => (
                <div key={index} className="relative h-32">
                  {story.type === 'image' ? (
                    <Image
                      src={story.url}
                      alt={`Story ${index}`}
                      fill
                      className="object-cover rounded-lg"
                      onClick={() => setCoverStory(index)}
                    />
                  ) : (
                    <video
                      src={story.url}
                      className="w-full h-full object-cover rounded-lg"
                      onClick={() => setCoverStory(index)}
                    />
                  )}
                  <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white px-2 rounded-tl-lg">
                    {index === 0 ? 'Cover' : index + 1}
                  </div>
                  <Button
                    className="absolute top-0 right-0 p-1 m-1"
                    variant="destructive"
                    size="sm"
                    onClick={() => deleteStory(index)}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            <Button onClick={saveEdit}>Save Changes</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StoryUploader;