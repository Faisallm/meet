function Backdrop(props) {
  // if div have no content...
  // we can use a single closing tag

  return <div className='backdrop' onClick={props.onCancel}/>;
}

export default Backdrop;
