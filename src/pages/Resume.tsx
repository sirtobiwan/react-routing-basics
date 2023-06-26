
const Resume = () => {
    return <article>
        <h2>Antonius Maximus</h2>
        <h3>Roman Emperor</h3>
        <table style={{border: "deepskyblue solid 1px"}}>
            <thead>
            <tr>
                <th colSpan={2}>Experience</th>
            </tr>
            </thead>
            <tbody style={{background: "hotpink"}}>
                <tr>
                    <td>86 BC</td>
                    <td>Born</td>
                </tr>
                <tr>
                    <td>30 BC</td>
                    <td>Died</td>
                </tr>
            </tbody>
        </table>
    </article>
}

export default Resume