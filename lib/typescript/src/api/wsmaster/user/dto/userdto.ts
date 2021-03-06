/*
 * Copyright (c) 2016 Codenvy, S.A.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *   Codenvy, S.A. - initial API and implementation
 */

export class UserDto {

    content: any;


    constructor(userObject: any) {
        this.content = userObject;
    }

    getId() : string {
        return this.content.id;
    }

    getContent() : any {
        return this.content;
    }
}
