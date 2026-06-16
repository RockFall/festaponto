'use client'

import { useState } from 'react'

export default function OpcaoB() {
  const [open, setOpen] = useState(false)

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16" style={{ backgroundColor: "#8CC63F" }}>
      <div className="w-full max-w-lg flex flex-col gap-16">

        {/* Hero */}
        <div className="flex flex-col gap-2">
          <h1 className="text-7xl font-normal lowercase tracking-tight text-[#1a1a1a] brat-blur">
            festa<span className="font-bold">.</span>
          </h1>
          <p className="text-2xl lowercase text-[#1a1a1a] brat-blur opacity-80">
            julho ou agosto.
          </p>
        </div>

        {/* About */}
        <div className="flex flex-col gap-4 text-[#1a1a1a]">
          <p className="text-lg lowercase leading-relaxed brat-blur">
            uma festa com show de talentos.
          </p>
          <p className="text-base lowercase leading-relaxed opacity-75 brat-blur">
            você pode apresentar absolutamente qualquer coisa — dança, música, banda completa,
            peça teatral, stand-up, ou ler a bula da diporona.
          </p>
          <p className="text-base lowercase leading-relaxed opacity-75 brat-blur">
            vai ter palco, setup completo pra músicos, e tatame pra cheerleaders.
          </p>
        </div>

        {/* CTA — popup */}
        <div className="flex flex-col gap-4">
          <button
            onClick={() => setOpen(true)}
            className="inline-block text-center border-2 border-[#1a1a1a] text-[#1a1a1a] px-8 py-4 text-lg lowercase
                       hover:bg-[#1a1a1a] hover:text-[#8CC63F] transition-all duration-200 brat-blur"
          >
            inscreva-se no show de talentos
          </button>
        </div>

        {/* Footer */}
        <footer className="text-xs lowercase opacity-40 brat-blur pt-4">
          festa ponto. todos os talentos bem-vindos.
        </footer>

      </div>

      {/* Modal overlay */}
      {open && (
        <div
          className="fixed inset-0 flex items-center justify-center px-6 py-8 z-50"
          style={{ backgroundColor: "rgba(26,26,26,0.55)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
        >
          <div
            className="w-full max-w-lg flex flex-col gap-6 p-8 relative"
            style={{ backgroundColor: "rgba(140,198,63,0.95)" }}
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-[#1a1a1a] text-2xl leading-none border border-[#1a1a1a] w-8 h-8 flex items-center justify-center
                         hover:bg-[#1a1a1a] hover:text-[#8CC63F] transition-all duration-200"
              aria-label="fechar"
            >
              ×
            </button>

            <h2 className="text-2xl lowercase text-[#1a1a1a] brat-blur">inscrições.</h2>

            <form className="flex flex-col gap-4" action="#" method="POST">
              <div className="flex flex-col gap-1">
                <label className="text-sm lowercase opacity-60 brat-blur">seu nome</label>
                <input
                  type="text"
                  name="nome"
                  required
                  className="bg-transparent border-b-2 border-[#1a1a1a] border-opacity-40 py-2 text-[#1a1a1a]
                             focus:outline-none focus:border-opacity-100 text-base lowercase placeholder-[#1a1a1a]
                             placeholder-opacity-30 brat-blur transition-all"
                  placeholder="seu nome aqui"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm lowercase opacity-60 brat-blur">contato (whatsapp / instagram)</label>
                <input
                  type="text"
                  name="contato"
                  required
                  className="bg-transparent border-b-2 border-[#1a1a1a] border-opacity-40 py-2 text-[#1a1a1a]
                             focus:outline-none focus:border-opacity-100 text-base lowercase placeholder-[#1a1a1a]
                             placeholder-opacity-30 brat-blur transition-all"
                  placeholder="como te achar"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm lowercase opacity-60 brat-blur">o que você vai apresentar?</label>
                <textarea
                  name="apresentacao"
                  required
                  rows={3}
                  className="bg-transparent border-b-2 border-[#1a1a1a] border-opacity-40 py-2 text-[#1a1a1a]
                             focus:outline-none focus:border-opacity-100 text-base lowercase placeholder-[#1a1a1a]
                             placeholder-opacity-30 brat-blur transition-all resize-none"
                  placeholder="descreva sua apresentação (pode ser qualquer coisa)"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm lowercase opacity-60 brat-blur">vai precisar de algo especial?</label>
                <textarea
                  name="necessidades"
                  rows={2}
                  className="bg-transparent border-b-2 border-[#1a1a1a] border-opacity-40 py-2 text-[#1a1a1a]
                             focus:outline-none focus:border-opacity-100 text-base lowercase placeholder-[#1a1a1a]
                             placeholder-opacity-30 brat-blur transition-all resize-none"
                  placeholder="equipamentos, tempo de palco, etc. (opcional)"
                />
              </div>

              <button
                type="submit"
                className="mt-2 border-2 border-[#1a1a1a] text-[#1a1a1a] px-8 py-3 text-base lowercase
                           hover:bg-[#1a1a1a] hover:text-[#8CC63F] transition-all duration-200 brat-blur self-start"
              >
                enviar inscrição
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}
