export default function Opcoes() {
  const options = [
    {
      label: "a",
      name: "só o link.",
      description: "o google forms cuida de tudo. você só precisa criar o formulário lá e colar o link aqui.",
      pros: ["zero manutenção", "respostas organizadas no google", "funciona em qualquer servidor"],
      cons: ["usuário sai do site", "visual do google forms, não seu"],
      href: "/opcao-a",
    },
    {
      label: "b",
      name: "popup.",
      description: "o formulário abre na própria página. parece mais parte do site.",
      pros: ["usuário fica no site", "visual totalmente seu", "sensação mais integrada"],
      cons: ["precisa de um backend pra receber os dados", "mais código pra manter"],
      href: "/opcao-b",
    },
    {
      label: "c",
      name: "formspree.",
      description: "formulário na página, respostas chegam no seu email. gratuito pra poucos envios.",
      pros: ["visual seu", "respostas no email", "sem backend próprio"],
      cons: ["depende de serviço externo", "limite de envios gratuitos"],
      href: "/opcao-c",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16" style={{ backgroundColor: "#8CC63F" }}>
      <div className="w-full max-w-4xl flex flex-col gap-12">

        {/* Title */}
        <h1 className="text-6xl font-normal lowercase tracking-tight text-[#1a1a1a] brat-blur">
          qual formato<span className="font-bold">?</span>
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((opt) => (
            <div
              key={opt.label}
              className="border-2 border-[#1a1a1a] p-6 flex flex-col gap-4"
            >
              <div className="flex flex-col gap-1">
                <span className="text-xs lowercase opacity-50 brat-blur">opção {opt.label}</span>
                <h2 className="text-2xl lowercase text-[#1a1a1a] brat-blur">{opt.name}</h2>
              </div>

              <p className="text-sm lowercase text-[#1a1a1a] opacity-75 brat-blur leading-relaxed">
                {opt.description}
              </p>

              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  {opt.pros.map((pro) => (
                    <p key={pro} className="text-xs lowercase text-[#1a1a1a] opacity-70 brat-blur">
                      + {pro}
                    </p>
                  ))}
                </div>
                <div className="flex flex-col gap-1">
                  {opt.cons.map((con) => (
                    <p key={con} className="text-xs lowercase text-[#1a1a1a] opacity-50 brat-blur">
                      − {con}
                    </p>
                  ))}
                </div>
              </div>

              <a
                href={opt.href}
                className="mt-auto inline-block text-sm lowercase text-[#1a1a1a] border-b border-[#1a1a1a] border-opacity-40
                           hover:border-opacity-100 transition-all duration-200 brat-blur self-start"
              >
                ver demo →
              </a>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-xs lowercase opacity-40 brat-blur">
          festa ponto. todos os talentos bem-vindos.
        </footer>

      </div>
    </main>
  )
}
