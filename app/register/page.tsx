"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { GraduationCap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RegisterPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <Link href="/" className="absolute top-8 left-8 flex items-center text-lg font-semibold">
        <GraduationCap className="h-6 w-6 mr-2" />
        <span>StudentFolio</span>
      </Link>

      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Buat Akun</CardTitle>
          <CardDescription>Masukkan detail Anda untuk membuat akun dan mulai membangun portofolio Anda</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Nama Depan</Label>
                <Input id="firstName" placeholder="John" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Nama Belakang</Label>
                <Input id="lastName" placeholder="Doe" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john.doe@university.ac.id" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="university">Universitas</Label>
              <Input id="university" placeholder="Universitas Indonesia" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="major">Jurusan</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih jurusan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cs">Teknik Informatika</SelectItem>
                  <SelectItem value="ee">Teknik Elektro</SelectItem>
                  <SelectItem value="me">Teknik Mesin</SelectItem>
                  <SelectItem value="ce">Teknik Sipil</SelectItem>
                  <SelectItem value="business">Manajemen Bisnis</SelectItem>
                  <SelectItem value="accounting">Akuntansi</SelectItem>
                  <SelectItem value="psychology">Psikologi</SelectItem>
                  <SelectItem value="medicine">Kedokteran</SelectItem>
                  <SelectItem value="law">Hukum</SelectItem>
                  <SelectItem value="other">Lainnya</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Mendaftar..." : "Daftar"}
            </Button>
          </CardFooter>
        </form>
      </Card>
      <div className="mt-4 text-center text-sm">
        Sudah memiliki akun?{" "}
        <Link href="/login" className="underline underline-offset-4 hover:text-primary">
          Masuk
        </Link>
      </div>
    </div>
  )
}
