# Tesla — Model 3

Next.js + Tailwind CSS дээр бүтээсэн Model 3-ын танилцуулга хуудас.

## Технологи

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **Tailwind CSS v4** — тохиргоо нь `app/globals.css` доторх `@theme` блокт
- **TypeScript**
- **Cal.com embed** — цаг захиалгын pop-up

## Ажиллуулах

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Бүтэц

```
app/
  layout.tsx        # үндсэн layout, фонт (next/font), Cal provider
  page.tsx          # нүүр хуудас
  globals.css       # Tailwind + дизайны токенууд (@theme)
components/
  CalProvider.tsx   # Cal.com embed-ийг нэг удаа ачаалж тохируулна
  sections/         # Navbar, Hero, FullSelfDriving, Contact
  ui/               # Button, icons
lib/
  cal.ts            # Cal.com-ийн холбоос ба товчны data-атрибутууд
  utils.ts          # cn() класс нэгтгэгч
public/assets/      # зураг, дүрсүүд
```

## Дизайны токенууд

Давтагдах утгуудыг `app/globals.css`-д Tailwind-ийн `@theme`-ээр тодорхойлсон:

| Токен | Утга | Хэрэглээ |
| --- | --- | --- |
| `--color-ink` | `#0c0805` | үндсэн текстийн өнгө (`text-ink`) |
| `--color-mist` | `#f2f2f2` | FSD хэсгийн дэвсгэр (`bg-mist`) |
| `--font-sans` | Manrope | үндсэн фонт |
| `--font-ui` | Roboto | navbar, hero (`font-ui`) |
| `--text-display` / `-sm` | 52px / 40px | хэсгийн гарчиг |
| `--text-heading` / `-sm` | 36px / 24px | дэд гарчиг |

Мөн `page-x` (хажуугийн зай) болон `section-y` (босоо зай) гэсэн хоёр
`@utility` бүх section-д давтагдана.

## Цаг захиалга

`components/ui/Button.tsx`-ийн `booking` пропыг өгөхөд товч нь Cal.com-ийн
`data-cal-*` атрибутуудыг авч, дарахад pop-up нээгдэнэ:

```tsx
<Button variant="dark" booking>Жолоодож үзэх</Button>
```

Холбоос болон namespace нь `lib/cal.ts`-д төвлөрсөн.
