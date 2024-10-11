import ListCard from './ListCard'

const List = ({data}) => {
    
  return (
    <div>
        {
            data.map(item => <ListCard item={item} key={item.id}/>)
        }
    </div>
  )
}

export default List