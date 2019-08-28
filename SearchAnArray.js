var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

function filterItems(arr, query) {
    return arr.filter((item)=> {
        // console.log(item)
        return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    })
  }

  console.log(filterItems(fruits, 'go')); 




