import Container from "./Container"

const Section = ({ children, className }) => {
    return (
        <section className={`py-20 bg-[var(--negro)] ${className}`}>
            <Container>
                {children}
            </Container>
        </section>
    )
}

export default Section