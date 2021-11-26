import type { GetStaticProps, NextPage } from 'next'
import { Head } from '@/components/Head'

const Gallery: NextPage = () => {
  return (
    <>
      <Head title="Solidgate" content=""/>
      <span>Galery</span>
    </>
  )
}

export default Gallery
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {}}
}