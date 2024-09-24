"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import {
  dataGeneralSidebar,
  dataSupportSidebar,
  dataToolsSidebar,
} from "./SidebarRoutes.data";
import { SidebarItem } from "../SidebarItem";

export function SidebarRoutes() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-6">
          <p className="uppercase font-medium text-slate-500 mb-2">General</p>
          {dataGeneralSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>

        <Separator />

        <div className="p-2 md:p-6">
          <p className="uppercase font-medium text-slate-500 mb-2">Tools</p>
          {dataToolsSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>

        <Separator />

        <div className="p-2 md:p-6">
          <p className="uppercase font-medium text-slate-500 mb-2">Support</p>
          {dataSupportSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
      </div>
      <div>

        {/* TODO: Future button to add subscription option */}
        {/* <div className="text-center p-6">
          <Button variant="outline" className="w-full">
            Upgrade Plan
          </Button>
        </div> */}


        <footer className="mt-3 p-3 text-center text-md text-slate-500 dark:text-slate-400">
          &copy; 2024 <a href="https://www.facutech.com" target="_blank">www.facutech.com</a> 
        </footer>
      </div>
    </div>
  );
}
