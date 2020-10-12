/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    const redesSociales = [
        { name: "facebook", url: "https://www.facebook.com/stevenaraujo98" },
        { name: "twitter", url: "https://www.twitter.com/stevenaraujo98" },
        { name: "instagram", url: "https://www.instagram.com/stevenaraujo98" },
        { name: "linkedin", url: "https://www.linkedin.com/in/stevenaraujo98/" },
        { name: "github", url: "https://www.github.com/stevenaraujo98" },
        { name: "researchgate", url: "https://www.researchgate.net/profile/Steven_Araujo3" },
    ]

    redesSociales.forEach(red => {
        const node = {
        name: red.name,
        url: red.url,
        id: createNodeId(`red-${red.name}`),
        internal: {
            type: "RedSocial",
            contentDigest: createContentDigest(red),
        },
        }
        actions.createNode(node)
    })
}