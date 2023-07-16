import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Links ({ page, selectedPage, setSelectedPage }) {

    const lowerCasePage = page.toLowerCase()
    return (
        <AnchorLink
            className={`${
                selectedPage === lowerCasePage ? 'text-yellow' : ''
            } hover:text-yellow transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )

}
