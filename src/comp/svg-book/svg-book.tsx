import cm from './svg-book.module.css'


export default function SvgBook() {

  return (
    <svg class={cm.svg1} viewBox="0 0 24 24">

      <path d="M19.8978 16H7.89778C6.96781 16 6.50282 16 6.12132 16.1022C5.08604 16.3796 4.2774 17.1883 4 18.2235"
        stroke="#1C274D" stroke-width="1.5" />
      <path d="M7 16V2.5"
        stroke="#1C274D" stroke-width="1.5" stroke-linecap="round" />
      <path id="my_path" class="book" d="M10 22C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16V8C4 5.17157 4 3.75736 4.87868 2.87868C5.75736 2 7.17157 2 10 2H14C16.8284 2 18.2426 2 19.1213 2.87868C20 3.75736 20 5.17157 20 8M14 22C16.8284 22 18.2426 22 19.1213 21.1213C20 20.2426 20 18.8284 20 16V12"
        stroke="#1C274D" stroke-width="1.5" stroke-linecap="round" />
        

      <text css-text1>
        <textPath href="#my_path">Какой-то русский текст по кривой.</textPath>
      </text>
      <text x="0" y="10">Здоровеньки</text>
    </svg>
  )
}
