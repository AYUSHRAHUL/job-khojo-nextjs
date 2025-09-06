'use client'

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { File, X } from "lucide-react";
import { uploadToBlob } from '@/utils/upload';
import Image from 'next/image';
import { Textarea } from './ui/textarea';

const companySettingsSchema = z.object({
  name: z.string().min(3, "Job title is required"),
  slug: z.string().optional(),
  email: z.string().min(3, "email is required"),
  mobile: z.number().min(10, 'Please recheck your number').optional(),
  bio: z.string().optional(),
  tagline: z.string().optional(),
  desc: z.string().optional(),
  founded: z.string().optional(),
  size: z.string().optional(),
  website: z.string().optional(),
  location: z.string().optional(),
  keywords: z.array(z.string()).optional(),
});

export default function CompanySettingsForm({ onSave, preloadValues }) {

  const [imageUrl, setImageUrl] = useState(preloadValues.image || '');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(companySettingsSchema),
    defaultValues: {
      name: preloadValues.name || '',
      slug: preloadValues.slug || '',
      email: preloadValues.email || '',
      location: preloadValues.location || '',
      category: '',
      tagline: preloadValues.tagline || '',
      desc: preloadValues.desc || '',
      founded: preloadValues.founded || '',
      size: preloadValues.size || '',
      website: preloadValues.website || ''
    },
  });

  const handleCompanyLogoUpload = async(e) => {
    const file = e.target.files[0];
    const { url } = await uploadToBlob(file);
    setValue('image', url)
    setImageUrl(url);
  }

  const onSubmit = (data) => {
    console.log('Form submitted', data);
    onSave({...data, imageUrl})
  };

return (
  <Card className="w-full max-w-2xl mx-auto shadow-xl rounded-2xl border border-gray-200 bg-white">
    <CardHeader className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-2xl p-6">
      <CardTitle className="text-white text-xl font-bold tracking-wide">
        Company Details
      </CardTitle>
    </CardHeader>
    <CardContent className="p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        {/* Company Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="font-medium text-gray-700">Company Name</Label>
          <Input 
            id="name" 
            placeholder="Enter your company name" 
            {...register('name')} 
            className="focus:ring-2 focus:ring-indigo-400"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* Slug */}
        <div className="space-y-2">
          <Label htmlFor="slug" className="font-medium text-gray-700">Slug / URL</Label>
          <Input 
            id="slug" 
            placeholder="example: louis-vuitton" 
            {...register('slug')} 
            className="focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Logo Upload */}
        <div className="space-y-2">
          <Label className="font-medium text-gray-700">Company Logo</Label>
          {imageUrl ? (
            <label className="block cursor-pointer">
              <Image className="py-3 rounded-md" src={imageUrl} width={80} height={80} alt="Company Logo" />
              <div className="border-2 border-dashed h-12 flex justify-center items-center gap-2 text-sm text-gray-600 hover:border-indigo-400 hover:text-indigo-500 transition">
                <File size="16" /> Change Logo
              </div>
              <input type="file" onChange={handleCompanyLogoUpload} accept="image/png, image/jpeg" hidden />
            </label>
          ) : (
            <label className="block cursor-pointer">
              <div className="border-2 border-dashed h-12 flex justify-center items-center gap-2 text-sm text-gray-600 hover:border-indigo-400 hover:text-indigo-500 transition">
                <File size="16" /> Upload Logo
              </div>
              <input type="file" onChange={handleCompanyLogoUpload} accept="image/png, image/jpeg" hidden />
            </label>
          )}
        </div>

        <hr className="my-4 border-gray-200" />

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="font-medium text-gray-700">Email</Label>
          <Input 
            id="email" 
            placeholder="Enter your email" 
            {...register('email')} 
            className="focus:ring-2 focus:ring-indigo-400"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Tagline */}
        <div className="space-y-2">
          <Label htmlFor="tagline" className="font-medium text-gray-700">Tagline</Label>
          <Input 
            id="tagline" 
            placeholder="e.g. Building the future of fashion" 
            {...register('tagline')} 
            className="focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="desc" className="font-medium text-gray-700">Description</Label>
          <Textarea 
            id="desc" 
            placeholder="Brief company description..." 
            {...register('desc')} 
            className="focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <hr className="my-4 border-gray-200" />

        {/* Founding Year */}
        <div className="space-y-2">
          <Label htmlFor="founded" className="font-medium text-gray-700">Founding Year</Label>
          <Input 
            id="founded" 
            placeholder="e.g. 2006" 
            {...register('founded')} 
            className="focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Website */}
        <div className="space-y-2">
          <Label htmlFor="website" className="font-medium text-gray-700">Website</Label>
          <Input 
            id="website" 
            placeholder="https://company.com" 
            {...register('website')} 
            className="focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Size */}
        <div className="space-y-2">
          <Label htmlFor="size" className="font-medium text-gray-700">Company Size</Label>
          <Input 
            id="size" 
            placeholder="e.g. 50-200 employees" 
            {...register('size')} 
            className="focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Location */}
        <div className="space-y-2">
          <Label htmlFor="location" className="font-medium text-gray-700">Location</Label>
          <Input 
            id="location" 
            placeholder="e.g. New York, USA" 
            {...register('location')} 
            className="focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        
        {/* Submit */}
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold py-2 rounded-lg shadow-md hover:opacity-90 transition"
        >
          Save Company Data
        </Button>
      </form>
    </CardContent>
  </Card>
);
}