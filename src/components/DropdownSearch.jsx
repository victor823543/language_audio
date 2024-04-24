import { useState } from "react"
import { useNavigate } from "react-router-dom"

const DropdownSearch = ({options}) => {
    const navigate = useNavigate()
    const [searchInput, setSearchInput] = useState('')
    const [filteredOptions, setFilteredOptions] = useState(options)
    const [isOpen, setIsOpen] = useState(false)
    
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchInput(value);
        const filtered = options.filter(option =>
            option.name.toLowerCase().includes(value.toLowerCase()) || option.author.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredOptions(filtered);
        if (e.target.value.length > 1) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    };


    return (
        <div className='relative w-[600px]'>
            <input
                placeholder='Search...'
                onChange={e => handleSearch(e)}
                className='block w-full px-4 py-2 bg-basic-300 border border-secondary-600 rounded-lg text-xl text-black focus:outline-none'
            >

            </input>
            {isOpen &&
            <div className='absolute w-full bg-basic-300 rounded-lg border border-secondary-600 overflow-hidden z-20'>
                {filteredOptions.length > 0 ?
                    filteredOptions.map((option) =>
                        <div 
                            className='px-4 py-2 flex flex-col gap-2 cursor-pointer hover:bg-main-300 text-black'
                            key={option.id}
                            onClick={() => navigate(`/player/${option.id}`)}
                        >
                            <div className='text-lg'>
                                {option.name}
                            </div>
                            <div className='text-md font-light'>
                                {option.author}
                            </div>
                        </div>
                    ) 
                    :
                    <div className="px-4 py-2 text-lg text-black">
                        No results matching you search...
                    </div>
                }
                
            </div>}

        </div>
    )
}

export default DropdownSearch