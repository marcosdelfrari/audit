"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [codigo, setCodigo] = useState("");
  const [loading, setLoading] = useState(false);

  const pesquisar = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!codigo.trim()) {
      return;
    }
    setLoading(true);
  };

  return (
    <main className="min-h-screen bg-[#ececec]">
      <section className="min-h-screen max-w-[330px] bg-[#156839] px-2 py-4 text-white">
        <div className="mx-auto w-full rounded border border-white/70 p-2">
          <Image
            src="/image.png"
            alt="Logo"
            width={220}
            height={85}
            className="h-auto w-full"
            priority
          />
        </div>

        <h1 className="mt-8 text-center text-4xl font-medium">QR Docto</h1>
        <p className="mt-4 text-center text-lg">
          Digite o codigo de seguranca do documento para validacao
        </p>

        <form onSubmit={pesquisar} className="mt-4 flex flex-col items-center gap-3">
          <input
            type="text"
            value={codigo}
            onChange={(event) => setCodigo(event.target.value)}
            className="h-9 w-[82%] rounded border border-zinc-300 bg-white px-3 text-black outline-none"
            aria-label="Codigo de seguranca"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded bg-[#0f4f2d] px-4 py-2 text-sm font-semibold hover:bg-[#0d4628]"
          >
            {loading ? "Carregando..." : "Pesquisar"}
          </button>
        </form>

        <div className="mt-4 rounded border border-zinc-300 bg-white p-2 text-zinc-800">
          <div className="rounded bg-[#1f6e3f] px-2 py-3 text-xl font-medium text-white">
            Clique ou toque a <strong>bandeira</strong>
          </div>

          <div className="mt-5 flex items-center justify-center gap-5 text-[24px]">
            <span role="img" aria-label="Pasta">
              &#128193;
            </span>
            <span role="img" aria-label="Pessoa">
              &#128694;
            </span>
            <span role="img" aria-label="Bandeira">
              &#9873;
            </span>
            <span role="img" aria-label="Email">
              &#9993;
            </span>
            <span role="img" aria-label="Caminhao">
              &#128666;
            </span>

            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full bg-[#f47f6a] text-black"
              aria-label="Pesquisar documento"
            >
              {loading ? (
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-black/30 border-t-black" />
              ) : (
                <span aria-hidden="true">&#8635;</span>
              )}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
