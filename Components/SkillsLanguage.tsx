import React from 'react'

interface Props {
    skill1 : String,
    skill2 : String,
    skill3 : String,
    level1 : String,
    level2 : String,
    level3 : String,
}

const SkillsLanguage = ({skill1, skill2, skill3, level1, level2, level3} : Props) => {
  return (
    <div>
        <div className="relative mb-[3rem]">
            <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">{skill1}</h1>
            <span className={`${level1} bottom-0 h-[6px] absolute bg-[#55e6a5]`}></span>
        </div>
    </div>
  )
}

export default SkillsLanguage