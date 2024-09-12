"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

import { FormEventProps } from "./FormEvent.types";

const formSchema = z.object({
  eventName: z.string().min(2),
  companieSelected: z.object({
    name: z.string().min(2),
    id: z.string(),
  }),
});

export function FormEvent(props: FormEventProps) {
  const { companies, setNewEvent, setOnSaveNewEvent, setOpen } = props;

  const [selectedCompany, setSelectedCompany] = useState({
    name: "",
    id: "",
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventName: "",
      companieSelected: {
        name: "",
        id: "",
      },
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setNewEvent(values);
    setOpen(false);
    setOnSaveNewEvent(true);
  }

  const handleCompanyChange = (newValue: string) => {
    const selectedCompany = companies.find(
      (company) => company.name === newValue
    );
    if (selectedCompany) {
      setSelectedCompany({
        name: selectedCompany.name,
        id: selectedCompany.id,
      });
      form.setValue("companieSelected.name", selectedCompany.name);
      form.setValue("companieSelected.id", selectedCompany.id);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* event title */}
            <FormField
              control={form.control}
              name="eventName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Reunión con..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* companies selected */}
            <FormField
              control={form.control}
              name="companieSelected.name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Empresa</FormLabel>
                  <Select
                    onValueChange={(newValue) => {
                      field.onChange(newValue);
                      handleCompanyChange(newValue);
                    }}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccione una empresa" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {companies.map((companie) => (
                        <SelectItem key={companie.id} value={companie.name}>
                          {companie.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          <Button type="submit">Guardar</Button>
        </form>
      </Form>
    </div>
  );
}
