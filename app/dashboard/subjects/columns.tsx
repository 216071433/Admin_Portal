"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import DeleteDialog from "@/components/DeleteDialog"

// This type is used to define the shape of our data.
export type Story = {
  id: string;
  heading: string;
  story: string;
  date: string;
  action: string;
};


export const columns: ColumnDef<Story>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <span>{row.original.id}</span>, // Ensuring TypeScript knows `row.original` is a `Story`
  },
  {
    accessorKey: "heading",
    header: "Heading",
    cell: ({ row }) => <span>{row.original.heading}</span>,
  },
  {
    accessorKey: "story",
    header: "Story",
    cell: ({ row }) => <span>{row.original.story}</span>,
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => <span>{row.original.date}</span>,
  },
  {
    accessorKey: "actions",
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const story = row.original; // Now `row.original` is correctly typed as `Story`
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                console.log("Editing story:", story);
              }}
            >
              Edit Story
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                deleteStory(story.id)
                  .then(() => {
                    alert("Story deleted successfully");
                  })
                  .catch((error) => {
                    alert(`Error deleting story: ${error.message}`);
                  });
              }}
            >
              <DeleteDialog title="Delete a Story" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];




