'use client'

import { useState } from 'react'
import { ArrowDown, Check, RotateCcw, Sparkles, X } from 'lucide-react'

const questions = [
  {
    statement: 'October is recognized as Breast Cancer Awareness Month.',
    answer: true,
    explanation: 'True. October, also known as Pink October, is dedicated to raising awareness about breast cancer and supporting patients and survivors.',
  },
  {
    statement: 'Breast cancer can affect men as well as women.',
    answer: true,
    explanation: 'True. Although breast cancer is much more common in women, men can also develop the disease.',
  },
  {
    statement: 'Breast cancer occurs when abnormal cells grow uncontrollably.',
    answer: true,
    explanation: 'True. These cells can form a tumor and may spread to other parts of the body if left untreated.',
  },
  {
    statement: 'Breast cancer always causes pain in its early stages.',
    answer: false,
    explanation: 'False. Breast cancer can develop without causing pain or other noticeable symptoms in its early stages.',
  },
  {
    statement: 'A new lump in the breast or armpit can be a warning sign of breast cancer.',
    answer: true,
    explanation: 'True. A new lump or thickening should be evaluated by a healthcare professional.',
  },
  {
    statement: 'The exact cause of every case of breast cancer is known.',
    answer: false,
    explanation: 'False. The exact cause is not always known, although several factors can increase the risk.',
  },
  {
    statement: 'Having a family history of breast cancer can increase your risk.',
    answer: true,
    explanation: 'True. A family history, especially involving close relatives, can increase the risk of developing breast cancer.',
  },
  {
    statement: 'Only older women can develop breast cancer.',
    answer: false,
    explanation: 'False. Risk increases with age, but breast cancer can also affect younger women and men.',
  },
  {
    statement: 'A change in breast size or shape can be a warning sign of breast cancer.',
    answer: true,
    explanation: 'True. An unexplained change in the size or shape of a breast should be checked by a healthcare professional.',
  },
  {
    statement: 'The pink ribbon is a symbol of breast cancer awareness.',
    answer: true,
    explanation: 'True. The pink ribbon represents breast cancer awareness, solidarity, and hope.',
  },
  {
    statement: 'Mammography uses X-rays to examine the breasts.',
    answer: true,
    explanation: 'True. Mammography can help detect breast cancer before a person notices symptoms.',
  },
  {
    statement: 'If you have no symptoms, breast cancer is impossible.',
    answer: false,
    explanation: 'False. Breast cancer can be present without noticeable symptoms, which is why recommended screening is important.',
  },
  {
    statement: 'Inherited genetic mutations such as BRCA1 and BRCA2 can increase breast cancer risk.',
    answer: true,
    explanation: 'True. Certain inherited mutations can significantly increase the risk of developing breast cancer.',
  },
  {
    statement: 'Breast cancer can never spread to other parts of the body.',
    answer: false,
    explanation: 'False. Breast cancer can spread to other parts of the body if cancer cells move beyond the breast.',
  },
  {
    statement: 'Regular physical activity may help reduce the risk of breast cancer.',
    answer: true,
    explanation: 'True. Physical activity is one of the lifestyle factors that may help lower breast cancer risk.',
  },
  {
    statement: 'Unusual nipple discharge can sometimes be a warning sign of breast cancer.',
    answer: true,
    explanation: 'True. Unusual discharge, particularly bloody discharge, should be evaluated by a healthcare professional.',
  },
  {
    statement: 'Every lump in the breast is cancerous.',
    answer: false,
    explanation: 'False. Many breast lumps are benign, meaning they are not cancerous, but a new lump should always be medically evaluated.',
  },
  {
    statement: 'Early detection can improve the chances of successful breast cancer treatment.',
    answer: true,
    explanation: 'True. Finding breast cancer early can make treatment more effective and improve outcomes.',
  },
  {
    statement: 'The Pink October campaign is only about wearing pink clothes.',
    answer: false,
    explanation: 'False. The campaign also promotes education, early detection, screening, and support for people affected by breast cancer.',
  },
  {
    statement: 'People should seek medical advice if they notice an unusual change in their breasts.',
    answer: true,
    explanation: 'True. Unusual changes should be checked by a healthcare professional, even if they do not cause pain.',
  },
];
export default function Page() {
  const [selected, setSelected] = useState<Record<number, boolean>>({})
  const [submitted, setSubmitted] = useState(false)

  const score = questions.reduce(
    (total, question, index) => total + (selected[index] === question.answer ? 1 : 0),
    0,
  )
  const answered = Object.keys(selected).length

  function resetQuiz() {
    setSelected({})
    setSubmitted(false)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf8] text-[#3f252d]">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-7 lg:px-10">
        <a href="#top" className="font-serif text-xl font-semibold tracking-[-0.03em] text-[#7d2940]">
          PinkVision - A campaign for October Pink by AiVision
        </a>
        <a href="#quiz" className="text-sm font-medium text-[#8b656d] transition-colors hover:text-[#7d2940]">
          Take the quiz <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section id="top" className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
        <img src="/logo.png" className="pointer-events-none absolute -right-12 top-8  h-72 w-72 rounded-full border border-[#efcbd1] lg:block" />
        <div className="relative max-w-3xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#b05268]">
            <span className="h-px w-8 bg-[#d98497]" /> a month for awareness
          </p>
          <h1 className="max-w-2xl font-serif text-5xl leading-[0.98] tracking-[-0.055em] text-[#61263a] sm:text-7xl lg:text-[92px]">
            Small moments.
            <br />
            <span className="italic text-[#bd5972]">Meaningful</span> impact.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#765760]">
            October Rose is a gentle reminder to pause, learn, and stand together. Throughout October, communities come together to share knowledge about breast cancer, honor those affected, and encourage conversations that can make a difference.
          </p>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[#765760]">
            <b>1. What Is Pink October?</b> <br/>
Pink October, also known as Breast Cancer Awareness Month, is an international campaign held every October to raise awareness about breast cancer, encourage early detection, and support patients and survivors. The pink ribbon is the symbol of this campaign, representing awareness, solidarity, and hope.
<br /> <b>2. What Is Breast Cancer?</b><br/>
Breast cancer is a disease in which abnormal cells in the breast grow uncontrollably and can form a tumor. If not treated, these cells may spread to other parts of the body. It mainly affects women, but men can also develop breast cancer.
 <br /><b>3. What Causes Breast Cancer?</b><br/>
The exact cause of breast cancer is not always known. However, several factors can increase the risk of developing it, including:<br />
- Increasing age.<br />
- A family history of breast cancer.<br />
- Inherited genetic mutations, such as BRCA1 and BRCA2.<br />
- Certain hormonal and reproductive factors.<br />
- Alcohol consumption, physical inactivity, and being overweight after menopause<br />
Having one or more risk factors does not necessarily mean that a person will develop breast cancer.
 <br /><b>4. What Are the Symptoms?</b><br/>
Common warning signs of breast cancer include:<br />
- A new lump in the breast or armpit.<br />
- A change in the size or shape of the breast.<br />
- Skin dimpling, redness, or unusual changes in the breast skin.<br />
- A nipple that turns inward.<br />
- Unusual nipple discharge, especially bloody discharge.<br />
- Persistent pain in the breast or nipple.<br />
Important: Some people have no symptoms during the early stages, which makes screening and medical awareness important.
 <br /><b>5. How Can We Detect It Early?</b><br/>
Early detection can improve treatment outcomes. It includes being aware of changes in your breasts, seeking medical advice when unusual changes appear, and following recommended screening guidelines. Mammography, an X-ray examination of the breast, can help detect cancer before symptoms develop. A healthcare professional can advise on the appropriate screening schedule based on age and individual risk.
 <br /><b>6. How Can We Reduce the Risk?</b><br/>
Although breast cancer cannot always be prevented, certain lifestyle choices may help reduce the risk:<br />
- Stay physically active.<br />
- Maintain a healthy weight.<br />
- Limit or avoid alcohol consumption.<br />
- Attend recommended breast cancer screenings.<br />
- Discuss family history and personal risk factors with a healthcare professional.
 <br /><b>7. Why Is Pink October Important?</b><br/>
Pink October reminds us that awareness, early detection, and access to healthcare matter. It encourages people to learn about breast cancer, share reliable information, support patients and survivors, and help break the stigma surrounding the disease.<br /><br />

🎀 Together, we can raise awareness, encourage early detection, and support every person affected by breast cancer.
          </p>

          <a href="#quiz" className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#7d2940] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(125,41,64,0.16)] transition-transform hover:-translate-y-0.5">
            Explore what you know <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="quiz" className="border-y border-[#eed9d9] bg-[#fdf1ef] px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#b05268]">A moment to reflect</p>
              <h2 className="font-serif text-4xl tracking-[-0.04em] text-[#61263a] sm:text-5xl">True or false?</h2>
              <p className="mt-4 max-w-lg leading-7 text-[#765760]">Test your knowledge, one thoughtful question at a time.</p>
            </div>
            <div className="rounded-2xl border border-[#edcdd0] bg-white/70 px-5 py-4 text-sm text-[#8b656d]">
              <span className="font-semibold text-[#7d2940]">{answered}</span> of {questions.length} answered
            </div>
          </div>

          <div className="grid gap-4">
            {questions.map((question, index) => {
              const choice = selected[index]
              const isCorrect = choice === question.answer
              return (
                <article key={question.statement} className="rounded-2xl border border-[#eed9d9] bg-white p-6 shadow-[0_5px_20px_rgba(125,41,64,0.04)] sm:p-7">
                  <div className="flex gap-5">
                    <span className="font-serif text-2xl text-[#d98497]">0{index + 1}</span>
                    <div className="flex-1">
                      <h3 className="max-w-2xl text-lg font-semibold leading-7 text-[#4f2d36]">{question.statement}</h3>
                      <div className="mt-5 flex flex-wrap gap-3">
                        {[true, false].map((value) => {
                          const active = choice === value
                          return (
                            <button
                              key={String(value)}
                              type="button"
                              aria-pressed={active}
                              onClick={() => setSelected((current) => ({ ...current, [index]: value }))}
                              className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${active ? 'border-[#7d2940] bg-[#7d2940] text-white' : 'border-[#e7cacc] bg-[#fffaf8] text-[#8b656d] hover:border-[#bd5972] hover:text-[#7d2940]'}`}
                            >
                              {value ? 'True' : 'False'}
                            </button>
                          )
                        })}
                      </div>
                      {submitted && choice !== undefined && (
                        <p className={`mt-4 flex items-start gap-2 text-sm leading-6 ${isCorrect ? 'text-[#39735a]' : 'text-[#a64759]'}`}>
                          {isCorrect ? <Check size={17} className="mt-1 shrink-0" aria-hidden="true" /> : <X size={17} className="mt-1 shrink-0" aria-hidden="true" />}
                          {isCorrect ? 'That is correct. ' : 'Not quite. '}{question.explanation}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <button type="button" onClick={() => setSubmitted(true)} disabled={answered === 0} className="rounded-full bg-[#bd5972] px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40">
              Check my answers
            </button>
            {submitted && (
              <div className="flex items-center gap-4 text-sm text-[#765760]">
                <span className="rounded-full bg-[#f8dce0] px-4 py-2 font-semibold text-[#7d2940]">You scored {score}/{questions.length}</span>
                <button type="button" onClick={resetQuiz} className="inline-flex items-center gap-2 font-semibold text-[#7d2940] hover:underline">
                  <RotateCcw size={15} aria-hidden="true" /> Try again
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-xs text-[#a17d84] lg:px-10">
        <span>October Rose</span>
        <span className="inline-flex items-center gap-2"><Sparkles size={13} aria-hidden="true" /> Learn. Share. Support.</span>
      </footer>
    </main>
  )
}
