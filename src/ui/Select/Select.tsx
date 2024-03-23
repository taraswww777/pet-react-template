import { ReactNode, useState } from 'react';
import { isArray } from 'lodash'

interface Item {
  id: string | number,
  caption: ReactNode,
}

export const Select = () => {
  const [selectedValue, setSelectedValue] = useState<Item | Item[]>();

  const items = [
    { id: 1, caption: 'one' },
    { id: 2, caption: 'two' },
    { id: 3, caption: 'tree' }
  ];

  return (
    <div className="text-2xl uppercase min-w-32">
      <button className="w-full border-2 border-black">
        {isArray(selectedValue) ? (
          <ul>
            {selectedValue.map(({ caption, id }) => (
              <li key={id}>
                <span className="py-2 px-2 bg-gray-400">
                  {caption}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="py-2 px-2 bg-gray-400">
            {selectedValue?.caption}
          </div>
        )}
      </button>
      <ul className="w-full flex flex-wrap justify-center">
        {items.map((item) => (
          <li
            key={item.id}
            className="w-full hover:bg-gray-100 py-2 px-2 bg-gray-400"
            onClick={() => {
              setSelectedValue(item);
            }}
          >{item.caption}</li>
        ))}
      </ul>
    </div>
  )
}
