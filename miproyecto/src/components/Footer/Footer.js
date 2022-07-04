// MUI imports
import { Box, Divider } from '@mui/material'
// Site components imports
import './footer.scss'

const Footer = () => {

    return (
        <Box className='footer' sx={{
            backgroundColor: 'red',
            width: '100%',
            boxShadow: '0px -2px 4px -1px rgb(0 0 0 / 30%), 0px -4px 5px 0px rgb(0 0 0 / 20%), 0px -1px 10px 0px rgb(0 0 0 / 14%);'
        }}
        >
            <footer className='footerContainer'>
                <Box className='footerBox'>
                    <p>info@efsports.com</p>
                    <p>0800-222-1114</p>
                    <p>Defensa al Consumidor</p>
                    <p>Política de Privacidad</p>
                </Box>
                <Divider variant="middle" color='white' orientation="vertical" flexItem />
                <Box className='footerBox'>
                    <p>Instagram: @EFSports</p>
                    <p>Linkedin: /EFSports/in</p>
                    <p>Política de Devoluciones</p>
                    <p>Sé Parte del Equipo de EFSports</p>
                </Box>
            </footer>
        </Box>

    )
}

export default Footer