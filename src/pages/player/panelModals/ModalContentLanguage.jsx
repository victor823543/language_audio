import { useState } from "react";

const ModalContentLanguage = ({info}) => {
    const [selectedLanguages, setSelectedLanguages] = useState(['English', 'Spanish'])
    
    const handleLanguageClick = (language) => {
        setSelectedLanguages((prev) => {
            let newList = [...prev]
            newList.splice(0, 1)
            newList.push(language)
            return newList
        })
    }
    return (
      <div className="w-auto flex flex-col justify-center items-center gap-3 text-basic-200">
        <p>SELECT TWO</p>
        <div className="flex gap-3">
          {info.languages.map(language => 
          <div
            key={language}
            className={`w-fit px-3 py-2 rounded-lg border-2 text-black ${selectedLanguages.includes(language) ? 'bg-secondary-300 border-secondary-800 hover:bg-secondary-400' : 'bg-basic-300 hover:bg-basic-400 border-basic-700'}`}
            onClick={() => handleLanguageClick(language)}
          >
            {language}
          </div>
          
        )}
        </div>
      </div>
    )
}

export default ModalContentLanguage