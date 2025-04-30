import Link from "next/link"
import { ArrowRight, BookOpen, Briefcase, GraduationCap, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <GraduationCap className="h-6 w-6 mr-2" />
          <span className="font-bold">StudentFolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Fitur
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contoh
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Harga
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Kontak
          </Link>
        </nav>
        <div className="ml-4 flex items-center gap-2">
          <Link href="/login">
            <Button variant="outline" size="sm">
              Masuk
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm">Daftar</Button>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Bangun Portofolio Profesional Anda
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Platform khusus untuk mahasiswa yang ingin membuat dan mengelola portofolio akademik dan profesional
                    mereka dengan mudah.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button size="lg" className="inline-flex items-center">
                      Mulai Sekarang
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#examples">
                    <Button size="lg" variant="outline">
                      Lihat Contoh
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt="Portfolio Preview"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  src="/placeholder.svg?height=550&width=800"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Fitur Utama</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Semua yang Anda butuhkan untuk membuat portofolio profesional yang mengesankan
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-gray-200 p-3 dark:bg-gray-700">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Proyek & Karya</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Tampilkan proyek akademik dan profesional Anda dengan detail lengkap
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-gray-200 p-3 dark:bg-gray-700">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Pendidikan</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Dokumentasikan perjalanan akademik, kursus, dan sertifikasi Anda
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-gray-200 p-3 dark:bg-gray-700">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Jaringan</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Bagikan portofolio Anda dengan dosen, perekrut, dan rekan mahasiswa
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="examples" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contoh Portofolio</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Lihat bagaimana mahasiswa lain telah membuat portofolio mereka
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group relative overflow-hidden rounded-lg border shadow-sm">
                  <img
                    alt={`Portfolio Example ${i}`}
                    className="aspect-[4/3] object-cover w-full transition-transform group-hover:scale-105"
                    src={`/placeholder.svg?height=300&width=400&text=Portfolio+${i}`}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                    <h3 className="text-xl font-bold text-white">Nama Mahasiswa {i}</h3>
                    <p className="text-white">Jurusan Teknik Informatika</p>
                    <Button variant="outline" className="mt-4 bg-white text-black hover:bg-gray-100">
                      Lihat Portofolio
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mulai Sekarang</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Buat portofolio profesional Anda dalam hitungan menit
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Link href="/register">
                  <Button className="w-full" size="lg">
                    Daftar Gratis
                  </Button>
                </Link>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Tidak ada kartu kredit yang diperlukan. Mulai dengan paket gratis.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 StudentFolio. Semua hak dilindungi.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Syarat & Ketentuan
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Kebijakan Privasi
          </Link>
        </nav>
      </footer>
    </div>
  )
}
