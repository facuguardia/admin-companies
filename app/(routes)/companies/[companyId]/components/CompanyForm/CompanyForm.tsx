"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { CompanyFormProps } from "./CompanyForm.types";
import { UploadButton } from "@/utils/uploadthing";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Toast } from "@/components/ui/toast";
import { Textarea } from "@/components/ui/textarea";
import { formSchema } from './CompanyForm.form';

export function CompanyForm(props: CompanyFormProps) {
  const { company } = props;
  const router = useRouter();

  const [photoUploaded, setPhotoUploaded] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: company.name,
      country: company.country,
      website: company.website,
      phone: company.phone,
      cif: company.cif,
      profileImage: company.profileImage,
      description: company.description,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) =>{
    console.log("on submit");
  }

  return <div>New Company Form</div>;
}
