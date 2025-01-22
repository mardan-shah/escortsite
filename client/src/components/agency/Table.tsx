'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image"
import { faker } from '@faker-js/faker';

interface RankingEntry {
  rank: number
  name: string
  profileImage: string
  contactClicks: string
  profileViews: string
}

export default function RankingTable() {
  const rankings: RankingEntry[] = Array.from({ length: 10 }, (_, i) => ({
    rank: i + 1,
    name: faker.person.fullName(),
    profileImage: faker.image.avatar(),
    contactClicks: (faker.number.int() % 1000).toString(), // Convert to string
    profileViews: (faker.number.int() % 1000).toString()   // Convert to string
  }))

  return (
    <div className="w-full  mx-auto p-4 space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Most viewed escort</span>
        <Select defaultValue="today">
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {[0, 1].map((column) => (
          <Table key={column}>
            <TableHeader>
              <TableRow className="bg-primarypink text-white hover:bg-primarypink/90 rounded-lg">
                <TableHead className="text-white">Escort Rank</TableHead>
                <TableHead className="text-white">Profile</TableHead>
                <TableHead className="text-white text-center">Contact Clicks</TableHead>
                <TableHead className="text-white text-center">Profile Views</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rankings.slice(column * 5, (column + 1) * 5).map((entry) => (
                <TableRow key={entry.rank} className="hover:bg-black/10">
                  <TableCell className="font-medium text-center">{entry.rank}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src={entry.profileImage}
                          alt={`${entry.name}'s profile`}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span>{entry.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">{entry.contactClicks}</TableCell>
                  <TableCell className="text-center">{entry.profileViews}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ))}
      </div>
    </div>
  )
}