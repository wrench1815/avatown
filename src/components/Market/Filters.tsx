import { useState } from 'react'

interface IFiltersProps {
  contents: {
    id: number
    name: string
    colorClass: string
    value: string
    isChecked: boolean
  }[]
  contentsChange: (id: number) => void
  prices: {
    id: number
    name: string
    value: string
    isChecked: boolean
  }[]
  pricesChange: (id: number) => void
}

function Filters(props: IFiltersProps) {
  const contentList = () => {
    // const [contents, setContents] = useState([
    //   {
    //     id: 1,
    //     name: 'VRChat(Quest)',
    //     colorClass: 'bg-success',
    //     value: 'vrchatQuest',
    //     isChecked: false,
    //   },
    //   {
    //     id: 2,
    //     name: 'VRChat(PCVR)',
    //     colorClass: 'bg-info',
    //     value: 'vrchatPcvr',
    //     isChecked: false,
    //   },
    //   {
    //     id: 3,
    //     name: 'Others',
    //     value: 'others',
    //     isChecked: false,
    //   },
    // ])

    // const handleCheckboxChange = (id: number) => {
    //   setContents((prevContents) =>
    //     prevContents.map((content) => {
    //       if (content.id === id) {
    //         return { ...content, isChecked: !content.isChecked }
    //       }
    //       return content
    //     })
    //   )
    // }

    return (
      <ul>
        {props.contents.map((content) => (
          <li key={content.id}>
            <div className="form-control inline-flex">
              <label className="label justify-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox"
                  value={content.value}
                  checked={content.isChecked}
                  onChange={() => props.contentsChange(content.id)}
                />
                <span className="text-lg">{content.name}</span>
                <div
                  className={`h-6 w-6 rounded-full ${content.colorClass}`}
                ></div>
              </label>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  const priceList = () => {
    // const [prices, setPrices] = useState([
    //   {
    //     id: 1,
    //     name: 'Under $10',
    //     value: 'under10',
    //     isChecked: false,
    //   },
    //   {
    //     id: 2,
    //     name: '$10 to $20',
    //     value: '10to20',
    //     isChecked: false,
    //   },
    //   {
    //     id: 3,
    //     name: '$20 to $30',
    //     value: '20to30',
    //     isChecked: false,
    //   },
    //   {
    //     id: 4,
    //     name: '$30 to $40',
    //     value: '30to40',
    //     isChecked: false,
    //   },
    //   {
    //     id: 5,
    //     name: '$40 to $50',
    //     value: '40to50',
    //     isChecked: false,
    //   },
    //   {
    //     id: 6,
    //     name: '$50 to $70',
    //     value: '50to70',
    //     isChecked: false,
    //   },
    //   {
    //     id: 7,
    //     name: '$70 & above',
    //     value: '70above',
    //     isChecked: false,
    //   },
    // ])

    // const handleCheckboxChange = (id: number) => {
    //   setPrices((prevPrices) =>
    //     prevPrices.map((price) => {
    //       if (price.id === id) {
    //         return { ...price, isChecked: !price.isChecked }
    //       }
    //       return price
    //     })
    //   )
    // }

    return (
      <ul>
        {props.prices.map((price) => {
          return (
            <li key={price.id}>
              <div className="form-control inline-flex">
                <label className="label justify-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox"
                    value={price.value}
                    checked={price.isChecked}
                    onChange={() => props.pricesChange(price.id)}
                  />
                  <span className="text-lg">{price.name}</span>
                </label>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }

  const polygonAmountList = () => {
    const [polygonsList, setPolygonsList] = useState([
      {
        id: 1,
        name: 'Under △7,500',
        value: 'under7500',
        isChecked: false,
      },
      {
        id: 2,
        name: '△7,500 to △10,000',
        value: '7500to10000',
        isChecked: false,
      },
      {
        id: 3,
        name: '△10,000 to △15,000',
        value: '10000to15000',
        isChecked: false,
      },
      {
        id: 4,
        name: '△15,000 to △20,000',
        value: '15000to20000',
        isChecked: false,
      },
      {
        id: 5,
        name: '△20,000 to △32,000',
        value: '20000to32000',
        isChecked: false,
      },
      {
        id: 6,
        name: '△32,000 to △70,000',
        value: '32000to70000',
        isChecked: false,
      },
      {
        id: 7,
        name: '△70,000 & Above',
        value: 'above70000',
        isChecked: false,
      },
    ])

    const handleCheckboxChange = (id: number) => {
      setPolygonsList((prevPolygons) =>
        prevPolygons.map((polygon) => {
          if (polygon.id === id) {
            return { ...polygon, isChecked: !polygon.isChecked }
          }
          return polygon
        })
      )
    }

    return (
      <ul>
        {polygonsList.map((polygon) => {
          return (
            <li key={polygon.id}>
              <div className="form-control inline-flex">
                <label className="label justify-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox"
                    value={polygon.value}
                    onChange={() => handleCheckboxChange(polygon.id)}
                  />
                  <span className="text-lg">{polygon.name}</span>
                </label>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }

  const autoUploadSupport = () => {
    const [autoUploads, setAutoUploads] = useState([
      {
        id: 1,
        name: 'Supported',
        value: 'supported',
        isChecked: false,
      },
      {
        id: 2,
        name: 'Unsupported',
        value: 'unsupported',
        isChecked: false,
      },
    ])

    const handleCheckboxChange = (id: number) => {
      setAutoUploads((prevAutoUploads) =>
        prevAutoUploads.map((autoUpload) => {
          if (autoUpload.id === id) {
            return { ...autoUpload, isChecked: !autoUpload.isChecked }
          }
          return autoUpload
        })
      )
    }

    return (
      <ul>
        {autoUploads.map((autoUpload) => {
          return (
            <li key={autoUpload.id}>
              <div className="form-control inline-flex">
                <label className="label justify-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox"
                    value={autoUpload.value}
                    checked={autoUpload.isChecked}
                    onChange={() => handleCheckboxChange(autoUpload.id)}
                  />
                  <span className="text-lg">{autoUpload.name}</span>
                </label>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <>
      <div className="prose-li:list-none prose-ul:pl-4 prose-li:pl-0">
        <div>
          <h3>Category</h3>
          <ul>
            <li className="cursor-pointer">Full avatar</li>
            <li className="cursor-pointer">Others</li>
          </ul>
        </div>

        <div>
          <h3>Contents</h3>
          {contentList()}
        </div>
        <div>
          <h3>Price</h3>
          {priceList()}
        </div>

        <div>
          <h3>Polygon amount</h3>
          {polygonAmountList()}
        </div>

        <div>
          <h3>Auto upload support</h3>
          {autoUploadSupport()}
        </div>
      </div>
    </>
  )
}

export default Filters
