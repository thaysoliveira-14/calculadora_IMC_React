import './Footer.css'

function Footer() {
    const linkGitHub = 'https://github.com/thaysoliveira-14'
    
    return(
        <>
            <div className="footer">
                <p>© 2024 - Site desenvolvido por <a href={linkGitHub}>Thays Oliveira</a></p>
            </div>
        </>
    )
}

export default Footer