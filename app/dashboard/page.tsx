"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  BookOpen,
  Briefcase,
  FileText,
  GraduationCap,
  Grid,
  LogOut,
  Plus,
  Settings,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

export default function DashboardPage() {
  const [completionPercentage, setCompletionPercentage] = useState(35)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
        <Link className="flex items-center gap-2 font-semibold" href="/dashboard">
          <GraduationCap className="h-6 w-6" />
          <span>StudentFolio</span>
        </Link>
        <nav className="hidden flex-1 md:flex">
          <ul className="flex flex-1 items-center gap-4 sm:gap-6">
            <li>
              <Link className="text-sm font-medium" href="/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="text-sm font-medium text-muted-foreground" href="/dashboard/portfolio">
                Portofolio
              </Link>
            </li>
            <li>
              <Link className="text-sm font-medium text-muted-foreground" href="/dashboard/projects">
                Proyek
              </Link>
            </li>
            <li>
              <Link className="text-sm font-medium text-muted-foreground" href="/dashboard/education">
                Pendidikan
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="rounded-full">
            <User className="h-4 w-4" />
            <span className="sr-only">Profil</span>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Settings className="h-4 w-4" />
            <span className="sr-only">Pengaturan</span>
          </Button>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-gray-50 dark:bg-gray-900 md:block">
          <div className="flex h-full flex-col gap-2 p-4">
            <div className="px-2 py-2">
              <h2 className="px-4 text-lg font-semibold tracking-tight">Menu</h2>
              <nav className="flex flex-col gap-1 mt-2">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all dark:bg-gray-800 dark:text-gray-50"
                >
                  <Grid className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/portfolio"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  <FileText className="h-4 w-4" />
                  Portofolio
                </Link>
                <Link
                  href="/dashboard/projects"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  <Briefcase className="h-4 w-4" />
                  Proyek
                </Link>
                <Link
                  href="/dashboard/education"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  <BookOpen className="h-4 w-4" />
                  Pendidikan
                </Link>
                <Link
                  href="/dashboard/analytics"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  <BarChart3 className="h-4 w-4" />
                  Analitik
                </Link>
              </nav>
            </div>
            <Separator />
            <div className="px-2 py-2">
              <h2 className="px-4 text-lg font-semibold tracking-tight">Pengaturan</h2>
              <nav className="flex flex-col gap-1 mt-2">
                <Link
                  href="/dashboard/settings"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  <Settings className="h-4 w-4" />
                  Pengaturan Akun
                </Link>
                <Link
                  href="/logout"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  <LogOut className="h-4 w-4" />
                  Keluar
                </Link>
              </nav>
            </div>
          </div>
        </aside>
        <main className="flex-1 p-6 md:p-8">
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-3xl font-bold">Selamat Datang, John!</h1>
              <p className="text-gray-500 dark:text-gray-400">Kelola portofolio Anda dan pantau perkembangan Anda</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Kelengkapan Profil</CardTitle>
                <CardDescription>Lengkapi profil Anda untuk meningkatkan visibilitas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{completionPercentage}% Lengkap</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">5/12 Bagian</span>
                  </div>
                  <Progress value={completionPercentage} className="h-2" />
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="flex items-center gap-2 rounded-lg border p-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400">
                      <User className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Informasi Dasar</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Lengkap</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border p-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Pendidikan</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Lengkap</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border p-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400">
                      <Briefcase className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Proyek</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Belum Lengkap</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Lengkapi Profil
                </Button>
              </CardFooter>
            </Card>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Proyek Terbaru</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center dark:bg-gray-800">
                        <Briefcase className="h-6 w-6 text-gray-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">Aplikasi Web E-commerce</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Ditambahkan 2 hari yang lalu</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center dark:bg-gray-800">
                        <Briefcase className="h-6 w-6 text-gray-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">Sistem Manajemen Perpustakaan</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Ditambahkan 1 minggu yang lalu</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Plus className="h-4 w-4" />
                    Tambah Proyek
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Pendidikan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center dark:bg-gray-800">
                        <GraduationCap className="h-6 w-6 text-gray-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">Universitas Indonesia</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Teknik Informatika, 2022 - Sekarang</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center dark:bg-gray-800">
                        <BookOpen className="h-6 w-6 text-gray-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">Kursus Web Development</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Udemy, 2023</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Plus className="h-4 w-4" />
                    Tambah Pendidikan
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Statistik Portofolio</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Total Kunjungan</span>
                      <span className="font-medium">24</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Proyek</span>
                      <span className="font-medium">2</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Pendidikan</span>
                      <span className="font-medium">2</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Keterampilan</span>
                      <span className="font-medium">5</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm">
                    Lihat Analitik Lengkap
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Pratinjau Portofolio</CardTitle>
                <CardDescription>Lihat bagaimana portofolio Anda terlihat oleh pengunjung</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video overflow-hidden rounded-lg border">
                  <img
                    src="/placeholder.svg?height=400&width=800&text=Pratinjau+Portofolio"
                    alt="Portfolio Preview"
                    className="h-full w-full object-cover"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Edit Portofolio</Button>
                <Button>Lihat Portofolio</Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
