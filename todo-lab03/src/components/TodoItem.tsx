import { Check } from 'lucide-react';
import '../assets/styles/components/todoItem.scss'

export default ( {name, category, isDone}:
  {name:string
  category:string
  isDone:boolean}) => {
    //TODO: add cusom checkbox! css only
    //todo: add styling
    
  return(
    <li className='flex items-center gap-4'>
        <input className='sr-only peer' type="checkbox" id={name}/>
        <span className={`shrink-0 flex justify-center items-center rounded-full w-16 h-16 bg-neutral-100 border border-blue-500 ${isDone ? 'bg-blue-600': ''}`}>
          <Check className={`stroke-current text-blue-600 ${isDone?'text-white': ''}`}/>
        </span>
        <label className='text-xl font-semibold' htmlFor={name}>{name}</label>
        <p className='text-neutral-400'>{category}</p>
    </li>

  )
};
