import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from './styles'

export default function UploadButton(){
    return (
      <Container>
        <Link to="/newarchive">
          <div className="btn-upload-item">
            <span className="icon-container">
              <svg className="svg-icon-upload">
                <use xlinkHref="icons.svg#upload"></use>
              </svg>
            </span>
          </div>
        </Link>
      </Container>
    );
}