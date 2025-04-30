"use client"

import Link from "next/link"
import {
  BarChart3,
  BookOpen,
  Briefcase,
  Edit,
  Eye,
  FileText,
  GraduationCap,
  Grid,
  LogOut,
  Plus,
  Settings,
  Share2,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PortfolioPage() {
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
              <Link className="text-sm font-medium text-muted-foreground" href="/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="text-sm font-medium" href="/dashboard/portfolio">
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
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  <Grid className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/portfolio"
                  className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all dark:bg-gray-800 dark:text-gray-50"
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
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Portofolio Saya</h1>
                <p className="text-gray-500 dark:text-gray-400">Kelola dan kustomisasi portofolio Anda</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="gap-2">
                  <Eye className="h-4 w-4" />
                  Pratinjau
                </Button>
                <Button className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Bagikan
                </Button>
              </div>
            </div>

            <Tabs defaultValue="content">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="content">Konten</TabsTrigger>
                <TabsTrigger value="appearance">Tampilan</TabsTrigger>
                <TabsTrigger value="settings">Pengaturan</TabsTrigger>
              </TabsList>
              <TabsContent value="content" className="mt-6">
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Informasi Profil</CardTitle>
                      <CardDescription>Informasi dasar yang ditampilkan di portofolio Anda</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-start gap-6">
                        <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                          <img
                            src="/placeholder.svg?height=96&width=96&text=JD"
                            alt="Profile"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-xl font-semibold">John Doe</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Mahasiswa Teknik Informatika</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Universitas Indonesia</p>
                          <p className="text-sm">john.doe@university.ac.id</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="gap-2">
                        <Edit className="h-4 w-4" />
                        Edit Profil
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Tentang Saya</CardTitle>
                      <CardDescription>Deskripsi singkat tentang diri Anda</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300">
                        Saya adalah mahasiswa Teknik Informatika yang bersemangat tentang pengembangan web dan
                        kecerdasan buatan. Saya memiliki pengalaman dalam mengembangkan aplikasi web menggunakan React,
                        Next.js, dan Node.js. Saya juga tertarik dengan machine learning dan data science.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="gap-2">
                        <Edit className="h-4 w-4" />
                        Edit
                      </Button>
                    </CardFooter>
                  </Card>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Proyek</CardTitle>
                          <Button variant="ghost" size="sm" className="gap-1">
                            <Plus className="h-4 w-4" />
                            Tambah
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="rounded-lg border p-3">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">Aplikasi Web E-commerce</h3>
                              <Button variant="ghost" size="icon">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                              Aplikasi web e-commerce dengan React dan Node.js
                            </p>
                          </div>
                          <div className="rounded-lg border p-3">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">Sistem Manajemen Perpustakaan</h3>
                              <Button variant="ghost" size="icon">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                              Sistem manajemen perpustakaan dengan Java dan MySQL
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Pendidikan</CardTitle>
                          <Button variant="ghost" size="sm" className="gap-1">
                            <Plus className="h-4 w-4" />
                            Tambah
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="rounded-lg border p-3">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">Universitas Indonesia</h3>
                              <Button variant="ghost" size="icon">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                              Teknik Informatika, 2022 - Sekarang
                            </p>
                          </div>
                          <div className="rounded-lg border p-3">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">Kursus Web Development</h3>
                              <Button variant="ghost" size="icon">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Udemy, 2023</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="appearance" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Tema dan Tampilan</CardTitle>
                    <CardDescription>Kustomisasi tampilan portofolio Anda</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium">Tema</h3>
                        <div className="mt-3 grid grid-cols-3 gap-4">
                          {["Modern", "Minimalis", "Akademik"].map((theme) => (
                            <div
                              key={theme}
                              className="relative cursor-pointer rounded-lg border p-2 hover:border-primary"
                            >
                              <div className="aspect-video rounded bg-gray-100 dark:bg-gray-800"></div>
                              <p className="mt-2 text-center text-sm">{theme}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Warna Utama</h3>
                        <div className="mt-3 flex gap-4">
                          {["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-red-500", "bg-gray-500"].map(
                            (color) => (
                              <div
                                key={color}
                                className={`h-8 w-8 cursor-pointer rounded-full ${color} hover:ring-2 hover:ring-offset-2`}
                              ></div>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Simpan Perubahan</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="settings" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Pengaturan Portofolio</CardTitle>
                    <CardDescription>Kelola pengaturan portofolio Anda</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">URL Kustom</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Sesuaikan URL portofolio Anda</p>
                        </div>
                        <Button variant="outline">Edit</Button>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Visibilitas</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Atur siapa yang dapat melihat portofolio Anda
                          </p>
                        </div>
                        <Button variant="outline">Edit</Button>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">SEO</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Optimalkan portofolio Anda untuk mesin pencari
                          </p>
                        </div>
                        <Button variant="outline">Edit</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
