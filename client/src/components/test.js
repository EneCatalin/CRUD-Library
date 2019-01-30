class A extends Component {

    state = {
        messages: {
           b:'',
           c:'',
           d: ''
         }
      }
 
     handleSubmit = () => {
         const { messages } = this.state
         // you could check if messages is not empty before sending
         axios.post('http://localhost:8000/create_data', {
         value: messages
        })
      }
 
     handleMessageChange = (name, message) => {
        // perform validations on message before adding it to state
        const {messages} = this.state
        this.setState({messages: {...messages, [name]:message}})
      }
 
   render(){
     const {messages} = this.state
     const b='b'
     const c='c'
     const d='d'
     return(
        <div>
         <componentB 
           message={message[b]} 
           name={b} 
           onChange={this.handleMessageChange}
          />
         <componentC 
           message={message[c]} 
           name={c} 
           onChange={this.handleMessageChange}
          />
         <componentD 
           message={message[d]} 
           name={d} 
           onChange={this.handleMessageChange}
          />
 
          <Button 
            type="button" 
            color="primary" 
            onClick={this.handleSubmit}>
            Submit
          </Button>
        </div>
        )
       }