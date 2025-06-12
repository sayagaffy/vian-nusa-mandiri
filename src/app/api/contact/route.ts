import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Validasi tipe data form
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse data dari request body
    const data: ContactFormData = await request.json();

    // Validasi data
    if (!data.name || !data.email || !data.phone || !data.message) {
      return NextResponse.json(
        {
          success: false,
          message: "Data tidak lengkap. Harap isi semua field wajib.",
        },
        { status: 400 }
      );
    }

    // Konfigurasi transporter email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Kirim email ke admin
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: `Pesan Baru dari ${data.name} - Form Kontak Vian Nusa Mandiri`,
      html: `
        <h2>Pesan Kontak Baru</h2>
        <p><strong>Nama:</strong> ${data.name}</p>
        <p><strong>Email Pengirim:</strong> ${data.email}</p>
        <p><strong>Telepon:</strong> ${data.phone}</p>
        ${data.company ? `<p><strong>Perusahaan:</strong> ${data.company}</p>` : ""}
        ${data.service ? `<p><strong>Layanan:</strong> ${data.service}</p>` : ""}
        <p><strong>Pesan:</strong><br>${data.message}</p>
      `,
    });

    // Kirim email konfirmasi ke pengirim
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: data.email,
      subject: "Terima Kasih Telah Menghubungi Vian Nusa Mandiri",
      html: `
        <h2>Terima Kasih, ${data.name}!</h2>
        <p>Kami telah menerima pesan Anda dan akan segera menghubungi Anda.</p>
        <p>Detail pesan yang Anda kirim:</p>
        <ul>
          <li><strong>Nama:</strong> ${data.name}</li>
          ${data.company ? `<li><strong>Perusahaan:</strong> ${data.company}</li>` : ""}
          ${data.service ? `<li><strong>Layanan:</strong> ${data.service}</li>` : ""}
        </ul>
        <p>Tim Vian Nusa Mandiri akan segera membalas dalam 1x24 jam.</p>
        <p>Terima kasih atas kepercayaan Anda.</p>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Pesan berhasil dikirim",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan saat mengirim pesan",
      },
      { status: 500 }
    );
  }
}
