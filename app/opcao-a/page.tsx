export default function OpcaoA() {
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

        {/* CTA — só o link */}
        <div className="flex flex-col gap-3">
          <a
            href="#"
            className="inline-block text-center border-2 border-[#1a1a1a] text-[#1a1a1a] px-8 py-4 text-lg lowercase
                       hover:bg-[#1a1a1a] hover:text-[#8CC63F] transition-all duration-200 brat-blur"
          >
            inscreva-se no show de talentos →
          </a>
          <p className="text-xs lowercase opacity-50 brat-blur">
            você será redirecionado para o google forms
          </p>
        </div>

        {/* Footer */}
        <footer className="text-xs lowercase opacity-40 brat-blur pt-4">
          festa ponto. todos os talentos bem-vindos.
        </footer>

      </div>
    </main>
  );
}
