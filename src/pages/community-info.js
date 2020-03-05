import React from 'react'
import styled from 'styled-components'
import { BaseLayout } from '../components/layouts'

const SectionGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;

  p,
  ol,
  dl {
    font-size: 1rem;
    line-height: 2rem;
  }

  dl > dt {
    font-weight: bold;
  }
`

const CommunityInfo = () => {
  return (
    <BaseLayout>
      <h1>Community Information</h1>
      <SectionGroup>
        <Section id="about">
          <h2>About Us</h2>
          <p>
            This community is for budding entrepreneurs to discuss startup
            ideas and get feedback on their projects as well as for creative
            members to sell, market, and advertise their products, sites, and
            services.
          </p>
        </Section>

        <Section id="rules">
          <h2>Rules &amp; Guidelines</h2>
          <ol>
            <li>
              Please refrain from only advertising third-party products and
              services in the appropriate marketplace channels and the member
              ad section.
            </li>
            <li>
              Discord server promotion is only allowed in the #discord-servers
              channel under the Public Member Ads category. All other invites
              are automatically deleted.
            </li>
            <li>
              Do not ask for special permissions or to be a staff member.
            </li>
            <li>
              Do not abuse any of our channels by posting meaningless
              reactions, spamming a message more than once within a short
              period of time, uploading or linking to illegal/inappropriate
              content, etc.
            </li>
          </ol>
        </Section>

        <Section id="ranks">
          <h2>Roles &amp; Ranks</h2>
          <dl>
            <dt>Admin</dt>
            <dd>
              These members have the final say in any dispute. They have the
              authority to make many server changes based on their own
              discretion. Please refrain from messaging admins for minor
              support enquiries. However, if a moderator has abused their
              power in some way, let any admin know through private message
              (DM).
            </dd>

            <dt>Moderator</dt>
            <dd>
              If you have general questions or concerns about something on the
              server or are having problems with another member, please don't
              hesitate to private message a moderator or ping one of them.
            </dd>

            <dt>🌩 Stormer</dt>
            <dd>
              These are members that have been on the server for at least 3
              days. After which, they are automatically granted this role.
              They have additional permissions such as using external emojis
              and embedding links.
            </dd>
          </dl>
        </Section>

        <Section id="faq">
          <h2>Frequently Asked Questions</h2>
          <p>Nothing here yet.</p>
        </Section>
      </SectionGroup>
    </BaseLayout>
  )
}

export default CommunityInfo
