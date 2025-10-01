import React from 'react';
import type { SlideContent } from './types';
import FindOddOneOut from './components/tasks/FindOddOneOut';
import AndOrTask from './components/tasks/AndOrTask';
import SequenceTask from './components/tasks/SequenceTask';
import IfThenTask from './components/tasks/IfThenTask';
import TwoCoinsGame from './components/tasks/TwoCoinsGame';
import AlgorithmTask from './components/tasks/AlgorithmTask';
import TicTacToe from './components/tasks/TicTacToe';
import NotTask from './components/tasks/NotTask';
import DeductionTask from './components/tasks/DeductionTask';
import RockPaperScissors from './components/tasks/RockPaperScissors';
import AnalogyTask from './components/tasks/AnalogyTask';
import SyllogismTask from './components/tasks/SyllogismTask';
import TruthLiarTask from './components/tasks/TruthLiarTask';


const IconCheck = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline-block text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const IconThink = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline-block text-yellow-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


export const SLIDES: SlideContent[] = [
  {
    type: 'title',
    title: 'Урок Логики: Учимся Думать!',
    subtitle: 'Добро пожаловать, юные мыслители!',
    content: (
      <div className="text-center">
        <p className="text-2xl mt-4 text-gray-300">Сегодня мы отправимся в увлекательное путешествие в мир загадок и правильных решений.</p>
        <div className="mt-16 text-8xl animate-bounce">🤔</div>
      </div>
    ),
  },
  {
    type: 'theory',
    title: 'Что такое логика?',
    subtitle: 'Умение правильно рассуждать и находить ответы.',
    content: (
      <div className="space-y-6 text-xl text-left">
        <p><IconCheck /> Логика помогает нам отличать правду от вымысла.</p>
        <p><IconCheck /> Она учит нас находить связи между разными вещами.</p>
        <p><IconCheck /> С помощью логики мы решаем сложные задачи шаг за шагом.</p>
        <p className="mt-8 p-4 bg-gray-800/50 rounded-lg text-cyan-300">Представьте, что логика - это ваш личный супер-компас, который всегда указывает на правильный ответ!</p>
      </div>
    ),
  },
  {
    type: 'task',
    title: 'Задание 1: Найди лишнее',
    subtitle: 'Какая картинка здесь лишняя и почему?',
    content: <FindOddOneOut />,
  },
  {
    type: 'theory',
    title: 'Волшебные слова: "И" и "ИЛИ"',
    subtitle: 'Как два маленьких слова меняют всё.',
    content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xl">
            <div className="p-6 bg-blue-900/50 rounded-xl border border-blue-500">
                <h3 className="text-3xl font-bold text-blue-300 mb-4">Союз "И"</h3>
                <p>Означает, что должны выполняться <strong className="text-white">ВСЕ УСЛОВИЯ</strong> сразу.</p>
                <p className="mt-4 p-3 bg-gray-800 rounded-md">Пример: "Найди картинку, где есть <strong className="text-yellow-300">солнце И</strong> <strong className="text-yellow-300">дом</strong>".</p>
            </div>
            <div className="p-6 bg-purple-900/50 rounded-xl border border-purple-500">
                <h3 className="text-3xl font-bold text-purple-300 mb-4">Союз "ИЛИ"</h3>
                <p>Означает, что должно выполняться <strong className="text-white">ХОТЯ БЫ ОДНО</strong> условие.</p>
                <p className="mt-4 p-3 bg-gray-800 rounded-md">Пример: "Найди картинку, где есть <strong className="text-yellow-300">кошка ИЛИ</strong> <strong className="text-yellow-300">собака</strong>".</p>
            </div>
        </div>
    ),
  },
  {
    type: 'task',
    title: 'Задание 2: Выбери правильно',
    subtitle: 'Нажми на все предметы, которые КРАСНЫЕ И КРУГЛЫЕ.',
    content: <AndOrTask />,
  },
  {
    type: 'theory',
    title: 'Волшебное слово "НЕ"',
    subtitle: 'Учимся говорить "нет" условиям.',
    content: (
        <div className="text-xl text-center space-y-8">
            <p>Частица "НЕ" переворачивает всё с ног на голову! Она означает <strong className="text-yellow-300">противоположность</strong>.</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-2xl">
                <div className="p-6 bg-gray-800 rounded-lg">
                    <span className="text-6xl">🍎</span>
                    <p>Это яблоко.</p>
                </div>
                <div className="text-4xl text-cyan-400">↔️</div>
                <div className="p-6 bg-gray-800 rounded-lg">
                    <span className="text-6xl">🍌</span>
                    <p>Это <strong className="text-yellow-300">НЕ</strong> яблоко.</p>
                </div>
            </div>
            <p className="mt-8 text-cyan-300">Если мы ищем что-то, что "НЕ красное", мы будем игнорировать все красные предметы.</p>
        </div>
    ),
  },
  {
    type: 'task',
    title: 'Задание 3: Найди то, что "НЕ..."',
    subtitle: 'Выбери все картинки, где НЕ нарисован транспорт.',
    content: <NotTask />,
  },
  {
    type: 'task',
    title: 'Задание 4: Продолжи ряд',
    subtitle: 'Какая фигура должна быть следующей?',
    content: <SequenceTask />,
  },
  {
    type: 'theory',
    title: 'Поиск связей: Аналогии',
    subtitle: 'Учимся находить похожие отношения.',
    content: (
        <div className="text-xl text-center space-y-6">
            <p>Аналогия - это когда мы находим что-то общее между двумя парами предметов.</p>
            <div className="p-6 bg-gray-800 rounded-lg text-2xl md:text-3xl inline-block">
                <span>🐶</span>
                <span className="mx-2 text-cyan-400">относится к</span>
                <span>🦴</span>
                <span className="font-bold text-white mx-4">ТАК ЖЕ КАК</span>
                <span>🐭</span>
                <span className="mx-2 text-cyan-400">относится к</span>
                <span>🧀</span>
            </div>
            <p className="mt-4 text-cyan-300">Собака любит косточку, а мышка любит сыр. Мы нашли одинаковую связь: "кто что любит есть".</p>
        </div>
    ),
  },
  {
      type: 'task',
      title: 'Задание 5: Найди пару',
      subtitle: 'Подбери правильную картинку, чтобы получилась аналогия.',
      content: <AnalogyTask />,
  },
  {
    type: 'theory',
    title: 'Правило: "Если... то..."',
    subtitle: 'Учимся предсказывать последствия.',
    content: (
        <div className="text-xl text-center space-y-8">
            <p>Эта конструкция помогает нам понять, что произойдет, если случится какое-то событие.</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-2xl">
                <div className="p-6 bg-gray-800 rounded-lg">
                    <span className="font-bold text-green-400">ЕСЛИ</span> пойдет дождь...
                </div>
                <div className="text-4xl text-cyan-400">➔</div>
                <div className="p-6 bg-gray-800 rounded-lg">
                    <span className="font-bold text-yellow-400">ТО</span> на земле появятся лужи.
                </div>
            </div>
            <p className="mt-8 text-cyan-300">Это правило причины и следствия!</p>
        </div>
    ),
  },
  {
    type: 'task',
    title: 'Задание 6: Что будет дальше?',
    subtitle: 'Если мальчик польет цветок, то что произойдет?',
    content: <IfThenTask />,
  },
  {
    type: 'theory',
    title: 'Учимся быть детективами!',
    subtitle: 'Метод исключения - наше секретное оружие.',
    content: (
        <div className="space-y-6 text-xl text-left">
            <p><IconThink /> Иногда, чтобы найти правильный ответ, нужно просто убрать все неправильные.</p>
            <p><IconThink /> Представь, что у тебя три коробки. Тебе говорят: "Приз НЕ в первой. И НЕ во второй."</p>
            <p><IconThink /> Где же тогда приз? Конечно, в третьей!</p>
            <p className="mt-8 p-4 bg-gray-800/50 rounded-lg text-cyan-300">Исключая то, что невозможно, мы находим правду, как настоящие сыщики!</p>
        </div>
    ),
  },
  {
    type: 'task',
    title: 'Задание 7: Где спрятался котенок?',
    subtitle: 'Используй подсказки, чтобы найти его.',
    content: <DeductionTask />,
  },
  {
    type: 'theory',
    title: 'Строим логические цепочки',
    subtitle: 'Как из двух правдивых утверждений получить третье.',
    content: (
        <div className="space-y-6 text-xl text-left max-w-2xl mx-auto">
            <p>Если мы знаем два факта, мы можем сделать из них новый вывод!</p>
            <div className="p-6 bg-gray-800/50 rounded-lg space-y-2">
                <p><span className="font-bold text-green-400">Факт 1:</span> Все планеты круглые.</p>
                <p><span className="font-bold text-green-400">Факт 2:</span> Земля - это планета.</p>
                <hr className="border-gray-600 my-3"/>
                <p><span className="font-bold text-yellow-400">Вывод:</span> Значит, Земля тоже круглая!</p>
            </div>
            <p className="mt-4 text-cyan-300">Это помогает нам узнавать новое, даже не видя этого своими глазами!</p>
        </div>
    ),
  },
  {
    type: 'task',
    title: 'Задание 8: Сделай вывод',
    subtitle: 'Используй два правила, чтобы найти правильный ответ.',
    content: <SyllogismTask />,
  },
  {
      type: 'theory',
      title: 'Загадки Рыцарей и Лжецов',
      subtitle: 'Когда кто-то говорит правду, а кто-то всегда лжет.',
      content: (
          <div className="space-y-6 text-xl text-center">
              <p>Представь, что есть люди, которые <strong className="text-green-400">никогда не врут</strong> (рыцари), и те, кто <strong className="text-red-400">никогда не говорит правду</strong> (лжецы).</p>
              <p>Если Лжец говорит: "Солнце синее", мы знаем, что на самом деле оно <strong className="text-yellow-300">НЕ</strong> синее.</p>
              <p className="mt-8 p-4 bg-gray-800/50 rounded-lg text-cyan-300">Чтобы разгадать их загадки, нужно помнить: всё, что говорит лжец - это неправда!</p>
          </div>
      ),
  },
  {
      type: 'task',
      title: 'Задание 9: Кому верить?',
      subtitle: 'Разгадай загадку лживого монстра.',
      content: <TruthLiarTask />,
  },
  {
    type: 'theory',
    title: 'Теория Игр: Думай наперед',
    subtitle: 'Как принимать решения, когда есть другие "игроки"?',
    content: (
         <div className="space-y-6 text-xl text-left">
            <p><IconThink /> Теория игр учит нас думать не только о своих действиях, но и о том, как могут поступить другие.</p>
            <p><IconThink /> Это помогает выбирать лучший ход в любой ситуации.</p>
            <p><IconThink /> Мы пытаемся "прочитать мысли" соперника, чтобы победить!</p>
            <p className="mt-8 p-4 bg-gray-800/50 rounded-lg text-cyan-300">Это как играть в шахматы или крестики-нолики: ты должен предугадать ход противника!</p>
        </div>
    ),
  },
  {
    type: 'task',
    title: 'Игра: "Две монетки"',
    subtitle: 'Попробуй предсказать выбор компьютера!',
    content: <TwoCoinsGame />,
  },
  {
    type: 'theory',
    title: 'Стратегия в "Камень, Ножницы, Бумага"',
    subtitle: 'Это не только удача!',
    content: (
        <div className="text-xl text-center">
            <p className="mb-6">Даже в этой простой игре можно думать наперед. Если ты заметил, что твой друг часто показывает "Камень", что ты выберешь?</p>
            <div className="grid grid-cols-3 gap-4 text-4xl">
                 <div className="p-4 bg-gray-800 rounded-lg">✊ → ✋</div>
                 <div className="p-4 bg-gray-800 rounded-lg">✌️ → ✊</div>
                 <div className="p-4 bg-gray-800 rounded-lg">✋ → ✌️</div>
            </div>
            <p className="mt-6 text-cyan-300">Правильно, <strong className="text-white">"Бумагу"</strong>! Наблюдай за соперником, находи его привычки и побеждай!</p>
        </div>
    ),
  },
  {
    type: 'task',
    title: 'Игра: Победи компьютер!',
    subtitle: 'Сыграй 5 раундов и попробуй угадать его следующий ход.',
    content: <RockPaperScissors />,
  },
  {
    type: 'theory',
    title: 'Последовательность: Алгоритмы',
    subtitle: 'Почему порядок действий очень важен.',
    content: (
        <div className="text-xl text-center space-y-6">
            <p>Алгоритм - это просто набор шагов, которые нужно выполнить в правильном порядке, чтобы получить результат.</p>
            <div className="p-6 bg-gray-800 rounded-lg">
                <h3 className="text-2xl text-cyan-400 mb-4">Например, алгоритм "Надеть носки и ботинки":</h3>
                <ol className="text-left list-decimal list-inside space-y-2">
                    <li>Взять носок.</li>
                    <li>Надеть носок на ногу.</li>
                    <li>Взять ботинок.</li>
                    <li>Надеть ботинок на ту же ногу.</li>
                </ol>
            </div>
            <p className="text-yellow-400">А что будет, если нарушить порядок и сначала надеть ботинок?</p>
        </div>
    ),
  },
  {
    type: 'task',
    title: 'Задание 10: Собери алгоритм',
    subtitle: 'Расставь действия в правильном порядке, чтобы заварить чай.',
    content: <AlgorithmTask />,
  },
  {
    type: 'theory',
    title: 'Стратегия в "Крестиках-ноликах"',
    subtitle: 'Как сделать первый ход, чтобы увеличить шансы на победу?',
    content: (
        <div className="text-xl text-center">
            <p className="mb-6">Крестики-нолики - это не просто игра на удачу. Это игра стратегий!</p>
            <div className="grid grid-cols-3 gap-8">
                <div className="p-4 bg-green-900/50 rounded-lg border border-green-500">
                    <h3 className="text-2xl font-bold text-green-300 mb-2">Лучший ход</h3>
                    <p>Занять <strong className="text-white">центр</strong>. Это дает больше всего вариантов для построения ряда.</p>
                </div>
                <div className="p-4 bg-yellow-900/50 rounded-lg border border-yellow-500">
                    <h3 className="text-2xl font-bold text-yellow-300 mb-2">Хороший ход</h3>
                    <p>Занять один из <strong className="text-white">углов</strong>. Это тоже сильная позиция.</p>
                </div>
                <div className="p-4 bg-red-900/50 rounded-lg border border-red-500">
                    <h3 className="text-2xl font-bold text-red-300 mb-2">Слабый ход</h3>
                    <p>Занять <strong className="text-white">сторону</strong> (не угол). Это дает меньше всего возможностей.</p>
                </div>
            </div>
        </div>
    ),
  },
  {
    type: 'task',
    title: 'Задание 11: Сделай лучший ход',
    subtitle: 'Сейчас ход крестиков. Куда нужно поставить крестик, чтобы точно победить на следующем ходу?',
    content: <TicTacToe />,
  },
  {
    type: 'theory',
    title: 'Подведем итоги',
    subtitle: 'Что мы сегодня узнали?',
    content: (
        <ul className="space-y-3 text-2xl list-disc list-inside text-left max-w-3xl mx-auto">
            <li>Что такое <strong className="text-cyan-400">логика</strong> и зачем она нужна.</li>
            <li>Как работают слова <strong className="text-cyan-400">"И"</strong>, <strong className="text-cyan-400">"ИЛИ"</strong>, <strong className="text-cyan-400">"НЕ"</strong>.</li>
            <li>Как находить <strong className="text-cyan-400">аналогии</strong> и общие связи.</li>
            <li>Что такое правило <strong className="text-cyan-400">"Если... то..."</strong>.</li>
            <li>Как строить <strong className="text-cyan-400">логические цепочки</strong>.</li>
            <li>Как быть <strong className="text-cyan-400">детективом</strong> и разгадывать загадки <strong className="text-cyan-400">лжецов</strong>.</li>
            <li>Что такое <strong className="text-cyan-400">алгоритмы</strong> и почему важен порядок.</li>
            <li>Как <strong className="text-cyan-400">думать наперед</strong> и находить стратегии в играх.</li>
        </ul>
    ),
  },
  {
    type: 'final',
    title: 'Вы великолепны!',
    subtitle: 'Урок окончен.',
    content: (
        <div className="text-center">
            <p className="text-2xl mt-4 text-gray-300">Вы отлично справились со всеми заданиями! Продолжайте тренировать свой ум каждый день.</p>
            <div className="mt-16 text-8xl">🏆</div>
        </div>
    ),
  },
];