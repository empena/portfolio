import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ProjectForm = () => {

  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('')
  const [category, setCategory] = useState('')
  const [projectEdit, setProjectEdit] = useState({})

  useEffect(() => {
    const { id } = props.match.params;
    axios.get(`/api/projects/${id}`).then(res => {
      setCarEdit(res.data)
    }).catch(err => {
      console.log(err)
    })}, [props.match.params])

  return ( cv

  )
}

export default ProjectForm

class DepartmentForm extends React.Component{

  state = {name:'', description:''}

  handleSubmit = (e) => {
    const department = {...this.state}
    axios.post('/api/departments', department)
    .then((res)=>{
      this.setState({name:'', description:''})
      this.props.history.push('/departments')
    })
    .catch((err)=>{
      console.log(err)
    })

  }
  handleChange = (e) => {
      const { target: {name, value} }= e
      this.setState({
       [name]: value
      })
    };
    
  render() {

    const { name, description } = this.state
    return (
      <ContainerBackground>
        <HeaderText>Add New Department</HeaderText>
      <FormContainer>

      <Form onSubmit={this.handleSubmit}>
        <Form.Field as={LabelText} width='equal'>
          <Form.Input 
            label="Name"
            placeholder="Fill in Name"
            name="name"
            value={name}
            onChange={this.handleChange} />
          <Form.Input
            label="Description"
            placeholder="Fill in Description"
            name="description"
            value={description}
            onChange={this.handleChange} />
        </Form.Field>


        <Form.Button inverted size='small' floated='center'>Submit</Form.Button>
      </Form>
      </FormContainer>
      </ContainerBackground>
    
    )
  }
}

const ContainerBackground = styled.div`
  background: linear-gradient(to bottom right, purple, #98063A);
`
const FormContainer = styled.div`
  padding: 80px;
`
const HeaderText = styled.h1`
  color: White;
  text-align: center;
  padding: 50px;
  font-size: 45px !important;
`

const LabelText = styled.label`
  color: White;
  padding: 50px;
  font-size: 17px !important;
  display: flex;
  flex-direction: column;
  flex-grow: 3;
  justify-content: center;
`

  export default DepartmentForm;
