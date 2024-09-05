"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CirclePlus } from "lucide-react";
import { useState } from "react";
import { FormCreateCustomer } from "../FormCreateCustomer";

export function HeaderCompanies() {
  const [openModal, setOpenModal] = useState(false);
  
  return <div className="flex justify-between items-center">
    <h2 className="text-2xl">List of companies</h2>
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogTrigger asChild>
        <Button>Create Company</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[635px]">
        <DialogHeader>
          <DialogTitle>Create customer</DialogTitle>
          <DialogDescription>
            Create and configure your customer
          </DialogDescription>
        </DialogHeader>

        <FormCreateCustomer setOpenModal={setOpenModal} />

      </DialogContent>
    </Dialog>
  </div>;
}
