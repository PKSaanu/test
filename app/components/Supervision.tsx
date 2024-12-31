"use client";

import React from "react";
import { Users, UserCheck } from 'lucide-react';
import { PinContainer } from "@/components/ui/3d-pin";

interface SupervisionCategory {
  title: string;
  count: number;
  icon: React.ReactNode;
}

export default function Supervision() {
  const categories: SupervisionCategory[] = [
    {
      title: "Team Software Project",
      count: 9,
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Undergraduate Research Project (Co-Supervision)",
      count: 5,
      icon: <UserCheck className="w-6 h-6" />
    },
    {
      title: "Undergraduate Research Project (Main Supervision)",
      count: 4,
      icon: <UserCheck className="w-6 h-6" />
    }
  ];

  return (
    <section id="supervision" className="py-20">
      <div className="container mx-auto">
        <div className="">
          <h2 className="text-2xl font-bold mb-16 text-purple-400">Supervision</h2>
          <div className="flex justify-center items-center gap-2">
            {categories.map((category, index) => (
              <PinContainer key={index} title={`${category.title}`} >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-500 bg-opacity-20 p-3 rounded-full">
                      {category.icon}
                    </div>
                    <h3 className="font-bold text-base text-slate-100">
                      {category.title}
                    </h3>
                  </div>
                  <div className="text-3xl font-bold text-purple-300 mb-2">
                    {category.count}
                  </div>
                  <div className="text-sm text-gray-400">
                    Projects/Students
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                </div>
              </PinContainer>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}