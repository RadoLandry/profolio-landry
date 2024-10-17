import React from 'react';
import GitLabIcone from './icones/GitLabIcone';
import GitHubIcone from './icones/GitHubIcone';
import LinkidinIcone from './icones/LinkidinIcone';

function ReseauSociaux() {
  return (
    <div className='flex justify-center gap-5 my-10'>
    <LinkidinIcone/>
    <GitHubIcone/>
    <GitLabIcone/>
</div>
  )
}

export default ReseauSociaux