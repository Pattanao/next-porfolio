import Image from 'next/image'

export default function WelcomePage() {
  return (
    <>
      <header className="flex justify-between bg-primary text-text-primary p-4 sticky top-0 z-10">
        <span className="font-bold">Pat S</span>
        <nav>
          <ul className="no-list-style flex space-x-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="flex flex-col">
        <section className="bg-secondary">
          <div className="flex flex-col items-center justify-center gap-16 m-40">
            <article className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-4xl font-bold">Frontend Developer</h1>
              <p className="text-2xl">
                I love new technologies and I&apos;m passionate about building
                great user experiences.
              </p>
            </article>
            <Image
              src="/avatar.png"
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full bg-primary"
            />
          </div>
        </section>
        <section
          id={sectionsIdMap.about}
          className="bg-tertiary text-text-contrast"
        >
          <article className="flex flex-col items-center justify-center gap-16 py-40 mx-96">
            <h2>Hello, I&apos;m Pat. Nice to meet you!</h2>
            <p className="text-xl">
              I&apos;m a Frontend Developer with a passion for building great
              user experiences. I love new technologies and I&apos;m always
              looking for ways to improve my skills and knowledge. I&apos;m
              excited to share my expertise with you and help you achieve your
              goals.
            </p>
          </article>
        </section>
        <section id={sectionsIdMap.hallOfFame} className="bg-background">
          <h1>Hall of Fame</h1>
        </section>
        <section
          id={sectionsIdMap.contact}
          className="border-2 h-auto"
        ></section>
      </main>
    </>
  )
}

const sectionsIdMap = {
  about: 'about',
  hallOfFame: 'hall-of-fame',
  contact: 'contact',
}

const navItems = [
  { name: 'About', href: `#${sectionsIdMap.about}` },
  { name: 'Hall of Fame', href: `#${sectionsIdMap.hallOfFame}` },
  { name: 'Contact', href: `#${sectionsIdMap.contact}` },
]
