import { Button, HighlightedText } from '../StyledComponents';
import { css } from '@emotion/css';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { getColor } from '../../core/bearStore';
import './UserInterface.scss';

export default function UserInterface() {
  return (
    <div className="interface-wrapper">
      <nav className="navigation-wrapper">
        <div className="logo-wrapper">
          <img src="src/assets/logo.png" />
        </div>
        <div className="nav-items-wrapper">
          <ul className="nav-items">
            <li>Features</li>
            <li>Pricing</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="signup-btn-wrapper">
          <Button
            textColor={getColor('button')}
            buttonColor={getColor('primary')}
            type="submit"
          >
            Get Started
          </Button>
        </div>
      </nav>
      <main className="section">
        <div className="content-wrapper">
          <h1>
            We make it simple to choose
            <HighlightedText> colors </HighlightedText>for your website
          </h1>
          <p>
            Let’s embody your beautiful ideas together, simplify the way you
            visualize your palette even before designing your next app idea.
          </p>
          <div className="email-input-wrapper">
            <input placeholder="Enter your email address" />
            <Button
              textColor={getColor('button')}
              buttonColor={getColor('primary')}
              type="submit"
            >
              Subscribe
            </Button>
          </div>
        </div>
        <div className="image-wrapper">
          <div className="image-inner-wrapper">
            <img src="https://placehold.co/600x1040" />
          </div>
        </div>
      </main>
      <section
        id="pricing"
        className="pricing"
        style={{ backgroundColor: '#E1E5E1' }}
      >
        <div className="header">
          <h2>Choose the plan that fits your needs</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis massa
            nibh, consequat id mi consectetur, porttitor pellentesque dolor.
          </p>
        </div>
        <div className="cards-wrapper">
          <div
            className={`price-card ${css`
              background-color: #eeeeee;
            `}`}
          >
            <div className="card-header">
              <span
                className={css`
                  background-color: transparent;
                  border-radius: 100px;
                  border: solid 1px #787878;
                  padding: 5px 13px;
                  font-size: 13px;
                  color: #787878;
                `}
              >
                Personal
              </span>
            </div>
            <div className="card-body">
              <div className="price-wrapper">
                <span
                  className="price"
                  style={{ color: `${getColor('primary')}` }}
                >
                  Free
                </span>
                <span className="price-period" style={{ color: '#787878' }}>
                  for life
                </span>
              </div>
              <p className="description" style={{ color: '#787878' }}>
                Everything you’ll need to get started on that idea, you’ve been
                waiting all this time
              </p>
            </div>
            <ul className="features-list" style={{ color: '#787878' }}>
              <li>
                <IoCheckmarkCircleOutline className="icon" />
                <span>Lorem ipsum</span>
              </li>
              <li>
                <IoCheckmarkCircleOutline className="icon" />
                <span>Etiam at dolor et turpis mattis</span>
              </li>
              <li>
                <IoCheckmarkCircleOutline className="icon" />
                <span>Phasellus mattis porttitor</span>
              </li>
              <li>
                <IoCheckmarkCircleOutline className="icon" />
                <span>Integer suscipit dolor a tortor</span>
              </li>
            </ul>
            <div className="card-footer">
              <Button
                textColor={getColor('button')}
                buttonColor={getColor('primary')}
                type="button"
              >
                Get started
              </Button>
            </div>
          </div>
          <div
            className="price-card"
            style={{ backgroundColor: `${getColor('primary')}` }}
          >
            <div className="card-header">
              <span
                className={css`
                  background-color: transparent;
                  border-radius: 100px;
                  border: solid 1px #a2a2a2;
                  padding: 5px 13px;
                  font-size: 13px;
                  color: #a2a2a2;
                `}
              >
                Personal Pro
              </span>
            </div>
            <div className="card-body">
              <div className="price-wrapper">
                <span
                  className={css`
                    color: ${getColor('button')};
                  `}
                >
                  $
                </span>
                <span
                  className="price"
                  style={{ color: `${getColor('button')}` }}
                >
                  20
                </span>
                <span className="price-period" style={{ color: '#A2A2A2' }}>
                  per month
                </span>
              </div>
              <p className="description" style={{ color: '#A2A2A2' }}>
                With additional features, this is the best option for
                individuals and professionals or a small team
              </p>
            </div>
            <ul className="features-list" style={{ color: '#A2A2A2' }}>
              <li>
                <IoCheckmarkCircleOutline className="icon" />
                <span>Lorem ipsum</span>
              </li>
              <li>
                <IoCheckmarkCircleOutline className="icon" />
                <span>Etiam at dolor et turpis mattis</span>
              </li>
              <li>
                <IoCheckmarkCircleOutline className="icon" />
                <span>Phasellus mattis porttitor</span>
              </li>
              <li>
                <IoCheckmarkCircleOutline className="icon" />
                <span>Integer suscipit dolor a tortor</span>
              </li>
            </ul>
            <div className="card-footer">
              <Button
                textColor={getColor('primary')}
                buttonColor={getColor('button')}
                type="button"
              >
                Get started
              </Button>
            </div>
          </div>
          <div
            className={`price-card ${css`
              background-color: #eeeeee;
            `}`}
          >
            <div className="card-header">
              <span
                className={css`
                  background-color: transparent;
                  border-radius: 100px;
                  border: solid 1px #787878;
                  padding: 5px 13px;
                  font-size: 13px;
                  color: #787878;
                `}
              >
                Teams
              </span>
            </div>
            <div className="card-body">
              <div className="price-wrapper">
                <span>$</span>
                <span
                  className="price"
                  style={{ color: `${getColor('primary')}` }}
                >
                  50
                </span>
                <span className="price-period" style={{ color: '#787878' }}>
                  per month
                </span>
              </div>
              <p className="description" style={{ color: '#787878' }}>
                Everything you’ll need to get started on that idea, you’ve been
                waiting all this time
              </p>
            </div>
            <ul className="features-list" style={{ color: '#787878' }}>
              <li>
                <IoCheckmarkCircleOutline className="icon" />
                <span>Lorem ipsum</span>
              </li>
              <li>
                <IoCheckmarkCircleOutline className="icon" />
                <span>Etiam at dolor et turpis mattis</span>
              </li>
              <li>
                <IoCheckmarkCircleOutline className="icon" />
                <span>Phasellus mattis porttitor</span>
              </li>
              <li>
                <IoCheckmarkCircleOutline className="icon" />
                <span>Integer suscipit dolor a tortor</span>
              </li>
            </ul>
            <div className="card-footer">
              <Button
                textColor={getColor('button')}
                buttonColor={getColor('primary')}
                type="button"
              >
                Get started
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
