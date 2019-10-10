import React from 'react';
import { Container } from './styles';

import CollapseItem from '../Collapse';
import UploadButton from '../UploadButton';

export default function AudioArea({ data }) {
  return (
    <Container>
      <main className="audio-area">
        <div className="audio-area__list">
          { data.audios && data.audios.map(audio => (
            <CollapseItem key={audio._id} data={audio}/>
          )) }

          <UploadButton/>
        </div>
      </main>
    </Container>
  );
}
