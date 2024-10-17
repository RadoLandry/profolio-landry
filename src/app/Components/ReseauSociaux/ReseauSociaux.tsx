import React from 'react';
import GitLabIcone from './icones/GitLabIcone';
import GitHubIcone from './icones/GitHubIcone';
import LinkidinIcone from './icones/LinkidinIcone';
import Link from 'next/link';

function ReseauSociaux() {
  return (
    <div className='flex justify-center gap-5 my-10'>
      <Link href="https://www.linkedin.com/in/rado-lalaina-landry-sandrio-randrianandrasana-719732230/"><LinkidinIcone/></Link>
      <Link href="https://github.com/RadoLandry"><GitHubIcone/></Link>
      <Link href="https://gitlab.com/"><GitLabIcone/></Link>
    </div>
  )
}

export default ReseauSociaux