import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import HowItWorks from "../components/how-it-works"
import HeroIndex from "../components/hero-index"
import ReadyToBegin from "../components/ready-to-begin"
import GalleryCarousel from "../components/gallery-carousel"
import { HTMLContent } from "../components/content"
import { GiStarsStack } from "react-icons/gi"

const duration = 0.35

const container = {
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      delayChildren: duration,
    },
  },
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const IndexPage = ({ data }) => {
  const post = data.prismicHomepage.data.body[0]
  return (
    <>
      <SEO
        title="Formula One Gym | Nottingham City Centre"
        description="No joining fee or contract, just £19pm. Student discount also available. See our website for what it includes!" />

      <motion.section variants={container} initial="hidden" animate="visible">
        <motion.div
          className="gradient-orange--vertical-broken-dark shadow-lg"
          variants={item}
          transition="easeInOut"
        >
          <HeroIndex />
        </motion.div>

        <motion.div
          className="mb-2 p-8 text-center text-white bg-hotpink-500 shadow-lg"
          variants={item}
          transition="easeInOut"
        >

            <p className="flex flex-col md:flex-row md:items-center md:justify-center">
              <GiStarsStack className="inline mx-auto md:mx-0 text-5xl text-yellow" />
              <span className="uppercase font-bold text-lg m-0 leading-tight">Student Offer</span>
              <span className="mx-2 my-0 leading-tight">£100 until July 2021!</span>
              <span className="mx-4 text-sm opacity-75 m-0 leading-tight">Available until end October</span>
              <Link className="mt-2 btn btn-hotpink-700 self-center md:m-0 md:ml-4" to="/prices">Find out more</Link>
            </p> 

        </motion.div>

        <motion.div
          className="container"
          variants={item}
          transition="easeInOut"
        >
          <div id="howitworks">
            <HowItWorks />
          </div>
        </motion.div>

        <ReadyToBegin />

        <div className="container">
          <div className="flex flex-col lg:flex-row lg:py-10">
            <div className="max-w-xl p-8 mx-auto lg:w-1/2">
              <HTMLContent
                className="content"
                content={post.primary.text.html}
              />
            </div>

            <div className="lg:p-8 lg:w-1/2">
              <GalleryCarousel images={post.items} />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default IndexPage

export const query = graphql`
query HomeQuery {
  prismicHomepage {
    data {
      body {
        ... on PrismicHomepageBodyTextGallery {
          id
          items {
            image {
              fluid {
                ...GatsbyPrismicImageFluid
              }
            }
          }
          primary {
            text {
              html
            }
          }
        }
      }
    }
  }
}

`
