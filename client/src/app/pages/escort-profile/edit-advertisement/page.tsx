'use client'
import { useState } from "react";
import styles from './ProgressBar.module.css';
import PersonalInfoForm from "@/components/create-advertisement/PersonalInfoForm";
import ServiceForm from "@/components/create-advertisement/ServiceOffering";


const EditAvertisment = () => {
  const [activeComponent, setActiveComponent] = useState(0);

  const components = [
    { id: 1, name: "Personal Information", component: <PersonalInfoForm setActiveComponent={setActiveComponent} /> },
    { id: 2, name: "Service Offering", component: <ServiceForm setActiveComponent={setActiveComponent} /> },
  ];

  return (
    <div className="w-full">
      <h1 className="text-center py-10 font-bold text-5xl text-primarypink">Edit Advertisement</h1>
      <ol className={`${styles.progressBar}`}>
        {components.map((item, index) => (
          <li
            key={item.id}
            className={`${styles.progressBarStep} ${index <= activeComponent ? styles.current : ''}`}
            onClick={() => setActiveComponent(index)}
            role="button"
          >
            <span className={styles.text}>{item.name}</span>
          </li>
        ))}
      </ol>

      <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
        {components[activeComponent]?.component}
      </div>

      
    </div>
  );
}
 
export default EditAvertisment;