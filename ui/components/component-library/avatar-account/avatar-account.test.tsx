import { render, RenderResult } from '@testing-library/react';
import React, { RefObject } from 'react';
import { AvatarAccount, AvatarAccountSize, AvatarAccountVariant } from '.';
import 'jest-canvas-mock';

describe('AvatarAccount', () => {
  it('should render correctly', () => {
    const { getByTestId, container }: RenderResult = render(
      <AvatarAccount
        data-testid="avatar-account"
        address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"
      />,
    );
    expect(getByTestId('avatar-account')).toBeDefined();
    expect(container.querySelector('svg')).toBeDefined();
    expect(
      container.getElementsByClassName('mm-avatar-account__jazzicon'),
    ).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  it('should render Jazzicon correctly', () => {
    const { container }: RenderResult = render(
      <AvatarAccount
        data-testid="avatar-account"
        address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"
        variant={AvatarAccountVariant.Jazzicon}
      />,
    );
    expect(container.querySelector('svg')).toBeDefined();
  });

  it('should render Blockies correctly', () => {
    const { container }: RenderResult = render(
      <AvatarAccount
        data-testid="avatar-account"
        address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"
        variant={AvatarAccountVariant.Blockies}
      />,
    );
    expect(container.querySelector('canvas')).toBeDefined();
    expect(container.querySelector('img')).toBeDefined();
  });

  it('should render with custom classname', () => {
    const { getByTestId }: RenderResult = render(
      <AvatarAccount
        className="mm-avatar-account--test"
        data-testid="test"
        address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"
      />,
    );
    expect(getByTestId('test')).toHaveClass('mm-avatar-account--test');
  });

  it('should render with address', () => {
    const container: JSX.Element = (
      <AvatarAccount
        className="mm-avatar-account--test"
        address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"
      />
    );
    expect(container.props.address).toStrictEqual(
      '0x5CfE73b6021E818B776b421B1c4Db2474086a7e1',
    );
  });

  it('should render with different size classes', () => {
    const { getByTestId }: RenderResult = render(
      <>
        <AvatarAccount
          size={AvatarAccountSize.Xs}
          data-testid={AvatarAccountSize.Xs}
          address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"
        />
        <AvatarAccount
          size={AvatarAccountSize.Sm}
          data-testid={AvatarAccountSize.Sm}
          address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"
        />
        <AvatarAccount
          size={AvatarAccountSize.Md}
          data-testid={AvatarAccountSize.Md}
          address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"
        />
        <AvatarAccount
          size={AvatarAccountSize.Lg}
          data-testid={AvatarAccountSize.Lg}
          address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"
        />
        <AvatarAccount
          size={AvatarAccountSize.Xl}
          data-testid={AvatarAccountSize.Xl}
          address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"
        />
      </>,
    );
    expect(getByTestId(AvatarAccountSize.Xs)).toHaveClass(
      'mm-avatar-base--size-xs',
    );
    expect(getByTestId(AvatarAccountSize.Sm)).toHaveClass(
      'mm-avatar-base--size-sm',
    );
    expect(getByTestId(AvatarAccountSize.Md)).toHaveClass(
      'mm-avatar-base--size-md',
    );
    expect(getByTestId(AvatarAccountSize.Lg)).toHaveClass(
      'mm-avatar-base--size-lg',
    );
    expect(getByTestId(AvatarAccountSize.Xl)).toHaveClass(
      'mm-avatar-base--size-xl',
    );
  });
  it('should forward a ref to the root html element', () => {
    const ref = React.createRef();
    render(
      <AvatarAccount
        address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"
        ref={ref}
      />,
    );
    expect(ref.current).not.toBeNull();
    expect(ref.current.nodeName).toBe('DIV');
  });
});
