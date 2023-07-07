"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
export const signupSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(1, {
    message: "Username must be at least 1 characters.",
  }),
  password: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
});

export const signInSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  
  password: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
});