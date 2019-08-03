const defaultStore = {
  focused:false,
}

export default (state = defaultStore , action )=>{
  let newStatus = JSON.parse(JSON.stringify(state));

  switch(action.type){
    case 'search-focus':
        newStatus.focused = true;
      return newStatus
    case 'search-blur':
        newStatus.focused = false;
      return newStatus;
    default:
        return newStatus;
  }

} 