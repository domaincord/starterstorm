import React from 'react'
import styled from 'styled-components'
import BaseLayout from '../components/layouts/BaseLayout'
import SEO from '../components/SEO'
import partners from '../data/partners.json'
import DiscordButton from '../components/DiscordButton'

const Partner = styled.div`
    height: auto;
    min-height: 200px;
    border: 3px solid #f5f5f5;
    padding: 15px;
    margin-bottom: 25px;

    h3 {
        margin-top: 0;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
      
        li {
          padding-left: 1rem;
          text-indent: -0.7rem;
        }
      
        li::before {
          content: "🔹 ";
        }
      }
`

const Partners = () => {
    console.log(partners)
    return (
        <BaseLayout isHome={false}>
            <SEO title="Our Partners" description={`At Starter Storm, we partner with a few select servers in a related industry in an effort to share resources and connect people together. Our current partner count is ${partners.length}.`} />
            {
                partners.map((partner, index) => (
                    <Partner key={`${partner.slug}:${index}`}>
                        <h3>{partner.name}</h3>
                        <small>{partner.tagline}</small>
                        <p dangerouslySetInnerHTML={{__html: partner.description}}></p>
                        <ul>
                            {
                                partner.features.length > 0 
                                    ? partner.features.map((feat, i) => (<li key={i}>{feat}</li>))
                                    : null
                            }
                        </ul>
                        <DiscordButton style={{marginTop: 25, width: 20}} url={partner.invite} isSSO={false} />
                    </Partner>
                ))
            }
        </BaseLayout>
    )
}

export default Partners